const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        message: "Admin already registered",
      });

    const { firstName, lastName, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const _user = new User({
      firstName,
      lastName,
      email,
      hash_password,
      username: shortid.generate(),
      role: "admin",
    });

    _user.save((error, data) => {
      if (error) {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
 
      if (data) {
        return res.status(201).json({
          message: "Admin created Successfully..!",
        });
      }
    });
  });
};

exports.signin = (req, res) => {
  try {
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        const isPassword = await user.authenticate(req.body.password);
        if (isPassword && user.role === "admin") {
          const token = jwt.sign(
            { _id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
          );
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.cookie("token", token, { expiresIn: "1d" });
          res.status(200).json({
            token,
            user: { _id, firstName, lastName, email, role, fullName },
          });
        } else {
          return res.status(400).json({
            message: "Неправильный пароль или логин",
          });
        }
      } else {
        return res.status(400).json({ message: "Что-то пошло не так, проблемы не в пароле и логине" });
      }
    });
  } catch (e) {
    res.status(500).json(e.message)
  }
};

exports.signout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Signout successfully...!",
    });
  } catch (e) {
    res.status(500).json(e.message)
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const { sort } = req.query
    const sortUser = User.find({})
    let users
    switch (sort) {
      case 'name':
        users = await sortUser.sort({ firstName: 1 })
        break
      case 'nameMinus':
        users = await sortUser.sort({ firstName: -1 })
        break
      case 'updatedAt':
        users = await sortUser.sort({ lastName: 1 })
        break
      case 'updatedAtMinus':
        users = await sortUser.sort({ lastName: -1 })
        break
      case 'email':
        users = await sortUser.sort({ email: 1 })
        break
      case 'emailMinus':
        users = await sortUser.sort({ email: -1 })
        break
      default:
        users = await User.find({})
    }
    return res.status(200).json({ users });
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: "Can not get users" })
  }
}


exports.searchUsers = async (req, res) => {
  try {
    const searchName = req.query.search
    let users = await User.find({})
    users = users.filter(user => user.email.includes(searchName))
    return res.status(200).json({ users })
  } catch (e) {
    console.log(e)
    return res.status(400).json({ message: 'Search Error' })
  }
}

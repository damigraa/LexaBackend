const jwt = require('jsonwebtoken');
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})


// const maxSize = 3 * 1024 * 1024; // for 1MB
 
// exports.upload = multer({ storage ,
//     fileFilter: (req, file, cb) => {
//       if (
//         file.mimetype == "image/png" ||
//         file.mimetype == "image/jpg" ||
//         file.mimetype == "image/jpeg"
//       ) {
//         cb(null, true);
//       } else {
//         cb(null, false);
//         return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//       }
//     },
//     limits: { fileSize: maxSize },
//   })
// //   .single('file')
  ;

exports.upload = multer({ storage });

exports.requireSignin = (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
    } else {
        return res.status(400).json({ message: 'Authorization required' });
    }
    next();
    //jwt.decode()
}

exports.userMiddleware = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(400).json({ message: 'User access denied' })
    }
    next();
}

exports.adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(400).json({ message: 'Admin access denied' })
    }
    next();
}



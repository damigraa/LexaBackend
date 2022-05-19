const Application = require("../models/application");
const mongoose = require("mongoose")


exports.applicationCreate = (req, res) => {
  try {
    const applicationObj = { 
      firstName: req.body.firstName,
      descriptionProblem: req.body.descriptionProblem,
      email: req.body.email,
      contactNumber: req.body.contactNumber
    }

    if (req.file) {
      applicationObj.samplePhoto = req.file.filename;
    }

    const application = new Application(applicationObj)
    application.save((error, application) => {
      if (error) {
        return res.status(400).json({
          error, message: "Ошибка при создании",
        });
      }
      if (application) {
        res.status(201).json({ application, message: "Успешно создано!" });
      }
    })
  } catch (e) {
    res.status(500).json(e.message)
  }
}


exports.getApplications = async (req, res) => {
  try {
    const { sort } = req.query
    let applications
    const sortApp = Application.find({})
    switch (sort) {
      case "name":
        applications = await sortApp.sort({ firstName: 1 })
        break;
      case "nameMinus":
        applications = await sortApp.sort({ firstName: 1 })
        break;
      case "email":
        applications = await sortApp.sort({ email: 1 })
        break;
      case "emailMinus":
        applications = await sortApp.sort({ email: -1 })
        break;
      case "updatedAt":
        applications = await sortApp.sort({ updatedAt: 1 })
        break;
      case "updatedAtMinus":
        applications = await sortApp.sort({ updatedAt: -1 })
        break;
      default:
        applications = await Application.find({})
        break;
    }
    return res.status(200).json({ applications });
  } catch (e) {
    return res.status(400).json(e.message)
  }

};


exports.searchApplication = async (req, res) => {
  try {
    const searchName = req.query.search
    let applications = await Application.find({})
    applications = applications.filter(application => application.firstName.includes(searchName))
    return res.status(200).json({ applications });
  } catch (e) {
    console.log(e)
    return res.status(400).json(e.message)
  }
}
exports.deleteApplicationById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No application with id: ${id}`);
  await Application.findByIdAndDelete(id);

  res.json({ message: "Блок удален успешно" });
}

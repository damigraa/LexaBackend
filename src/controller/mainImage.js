const MainImage = require("../models/mainImage");
const mongoose = require("mongoose")

exports.createMainImage = (req, res) => {
  try {
    const mainImageObj = { 
      header: req.body.header,
      name: req.body.name,
      description: req.body.description,
      descriptionButton: req.body.descriptionButton,
      buttonText: req.body.buttonText
    }
    if (req.file) {
      mainImageObj.image = req.file.filename

    }
    const mainImage = new MainImage(mainImageObj)
    mainImage.save((error, mainImage) => {
      if (error) return res.status(400).json({ error })
      if (mainImage) {
        res.status(201).json({ mainImage })
      }
    })

  } catch (e) {
    res.status(500).json({ message: "hello" })
  }

};

exports.getMainImage = (req, res) => {
  MainImage.find({}).exec((error, mainImage) => {
    if (error) return res.status(400).json({ message: "Заголовок гланой страниы не найден" })
    if (mainImage) return res.json({ mainImage })
  })
}
exports.deleteMainImage = (req, res) => {
  try {
    const { mainImageId } = req.body.payload
    if (mainImageId) {
      MainImage.deleteOne({ _id: mainImageId }).exec((error, mainImage) => {
        if (error) return res.status(400).json({ message: "Id не найден" })
        if (mainImage) return res.status(202).json({ mainImage, message: "Удаление прошло успешно" })
      })
    }
  } catch (e) {
    res.status(500).json(e.message)
  }
}



exports.updateMainImage = async (req, res) => {
  const { id } = req.params;
  const mainImage = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No mainImage with id: ${id}`);

  const updatedMainImage = await MainImage.findByIdAndUpdate(id, mainImage, { new: true });

  res.json(updatedMainImage);
}
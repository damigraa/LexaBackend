const Gallery = require("../models/gallery");
const slugify = require("slugify");

exports.createGallery = (req, res) => {

 try {
    const { name, description } = req.body;
    let galleryPictures = [];

    if (req.files.length > 0) {
      galleryPictures = req.files.map((file) => {
        return { img: file.filename };
      });
    }

    const gallery = new Gallery({
      name: name,
      description: description,
      slug: slugify(name),
      galleryPictures,
    });

    gallery.save((error, gallery) => {
      if (error) return res.status(400).json({error, message: "Ошибка при сохранении" });
      if (gallery) {
        res.status(201).json({ gallery, message: "Данные добавлены" });
      }
    });
   } catch (e) {
     res.status(500).json(e)
   }
};


exports.deleteGalleryById = (req, res) => {
  try {
    const { galleryId } = req.body.payload;
    if (galleryId) {
      Gallery.deleteOne({ _id: galleryId }).exec((error, result) => {
        if (error) return res.status(400).json({ message: "Ошибка удаления" });
        if (result) {
          res.status(202).json({ message: "Удачно удалили галерею" });
        }
      });
    }
  } catch (e) {
    res.status(500).json({ message: "Произошла ошибка при попытке удалени данных... " })
  }

};

exports.getGallery = async (req, res) => {
  try {
    await Gallery.find({})
      .select("_id name galleryPictures")
      .exec((error, galleries) => {
        if (error) return res.status(400).json({ message: "Не удалось получить Галерею" })
        if (galleries) return res.status(200).json({ galleries, message: "Галлерея Добавлена" })
      });
  } catch (e) {
    res.status(500).json({ message: "Произошла ошибка при попытке получить данные..." })
  }
};
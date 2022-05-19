const Engraving = require("../../models/components/engraving");
const mongoose = require("mongoose")

exports.createEngraving = (req, res) => {
  try {
    const engravingObj = { heading, title, description, imageTitle, listText } = req.body
  
    if (req.file) {
      engravingObj.engImage = req.file.filename;
    }
    const eng = new Engraving(engravingObj)
    eng.save((error, engraving) => {
      if (error) return res.status(400).json({ error });
      if (engraving) {
        res.status(201).json({ engraving });
      }
    });
  } catch (e) {
    res.status(400).json(e)
  }
};

exports.createEngravingCatalog = (req, res) => {
  try {
    ц
  } catch (e) {
    res.status(400).json(e.message)
  }
}

exports.updateEngravingById = async (req, res) => {
  const { id } = req.params;
  const engraving = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No engraving with id: ${id}`);

  const updatedEngraving = await Engraving.findByIdAndUpdate(id, engraving, { new: true });

  res.json(updatedEngraving);
}

exports.getEngravingDetailsById = (req, res) => {
  const { engravingId } = req.params;
  if (engravingId) {
    Engraving.findOne({ _id: engravingId }).exec((error, engraving) => {
      if (error) return res.status(400).json({ error });
      if (engraving) {
        res.status(200).json({ engraving });
      }
    });
  } else {
    res.status(500).json(e.message)
  }
};


exports.deleteEngravingById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No engraving with id: ${id}`);
  await Engraving.findByIdAndDelete(id);

  res.json({ message: "Блок удален успешно" });
};



exports.getEngraving = (req, res) => {
  try {
    Engraving.find({}).exec((error, engraving) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (engraving) {
        return res.status(200).json({ engraving });
      }
    })

  } catch (e) {
    return res.status(500).json({ e, message: "Can not get engraving" })
  }
}

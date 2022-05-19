const Manufacture = require("../models/manufacture")
const mongoose = require("mongoose")


exports.createManufacture = (req, res) => {
    try {
        const manufactureObj = {
            title: req.body.title,
            description: req.body.description
        }

        if (req.file) {
            manufactureObj.iconImg = req.file.filename;
        }

        const manufacture = new Manufacture(manufactureObj)
        manufacture.save((error, manufacture) => {
            if (error) return res.status(400).json({ error });
            if (manufacture) {
                res.status(201).json({ manufacture });
            }
        })
    } catch (e) {
        res.status(500).json(e)
    }
}


exports.getManufacture = (req, res) => {
    Manufacture.find({}).exec((error, manufacture) => {
        if (error) return res.status(400).json({ message: "Не удалось получить данные" })
        if (manufacture) {
            return res.status(200).json({ manufacture, message: "Данные успешно получены" })
        }
    })
}


exports.updateManufacture = async (req, res) => {
    const { id } = req.params;
    const manufacture = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No manufacture with id: ${id}`);

    const updatedManufacture = await Manufacture.findByIdAndUpdate(id, manufacture, { new: true });

    res.json(updatedManufacture);
}


exports.deleteManufacture = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No manufacture with id: ${id}`);
    await Manufacture.findByIdAndDelete(id);

    res.json({ message: "Блок успешно удален!" });
}
const mongoose = require("mongoose")
const GraniteMaterial = require("../models/pages/graniteMaterial")







exports.createGraniteMaterial = (req, res) => {
    try {
        const graniteMaterialObj = {
            name: req.body.name,
            description: req.body.description,
            title: req.body.title,
            advantage: req.body.advantage,
            list: req.body.list,
            buttonHref: req.body.buttonHref,
            colorText: req.body.colorText,
        }

        if (req.file) {
            graniteMaterialObj.graniteImg = req.file.filename;
        }
        const con = new GraniteMaterial(graniteMaterialObj)
        con.save((error, graniteMaterial) => {
            if (error) return res.status(400).json({ error })
            if (graniteMaterial) return (
                res.status(201).json({ graniteMaterial })
            )
            graniteMaterial.name[0]
        })
    } catch (e) {
        res.status(500).json(e)
    }

}

exports.getGraniteMaterial = (req, res) => {
    try {
        GraniteMaterial.find({}).exec((error, graniteMaterial) => {
            if (error) return res.status(400).json({ message: "Проблема при получении данных!" })
            if (graniteMaterial) return (
                res.status(200).json({ graniteMaterial, message: "Лерка учись!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateGraniteMaterial = async (req, res) => {
    const { id } = req.params;
    const graniteMaterial = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No graniteMaterial with id: ${id}`);

    const updatedGraniteMaterial = await GraniteMaterial.findByIdAndUpdate(id, graniteMaterial, { new: true });

    res.json(updatedGraniteMaterial);
}

exports.deleteGraniteMaterial = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No graniteMaterial with id: ${id}`);
    await GraniteMaterial.findByIdAndDelete(id);

    res.json({ message: "Блок удален успешно" });
}

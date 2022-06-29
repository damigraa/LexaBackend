const Warranty = require("../../models/components/warranty")
const mongoose = require("mongoose")

exports.createWarranty = (req, res) => {
    try {

        const warrantyObj = {
            title: req.body.title,
            description: req.body.description
        }

        if (req.file) {
            warrantyObj.iconImg = req.file.filename;
        }
        const war = new Warranty(warrantyObj)
        war.save((error, warranty) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (warranty) return (
                res.status(201).json({ warranty, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getWarranty = (req, res) => {
    try {
        Warranty.find({}).exec((error, warranty) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (warranty) return (
                res.status(200).json({ warranty, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.updateWarranty = async (req, res) => {
    try {
        const { id } = req.params
        const warranty = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`No warranty with id: ${id}`)
        const updatedWarranty = await Warranty.findByIdAndUpdate(id, warranty, { new: true })

        res.json(updatedWarranty)
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.deleteWarranty = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`No warranty with id: ${id}`)
        await Warranty.findByIdAndDelete(id)
    } catch (e) {
        res.status(500).json(e)
    }
}
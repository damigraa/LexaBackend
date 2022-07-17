const Benefits = require("../../models/components/benefits")
const mongoose = require("mongoose")

exports.createBenefits = (req, res) => {
    try {
        const benefitsObj = {
            title: req.body.title,
            description: req.body.description,
        }
        const benefits = new Benefits(benefitsObj)
        benefits.save((error, benefits) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (benefits) return (
                res.status(201).json({ benefits, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getBenefits = (req, res) => {
    try {
        Benefits.find({}).exec((error, benefits) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (benefits) return (
                res.status(200).json({ benefits, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateBenefits = async (req, res) => {
    const { id } = req.params;
    const benefits = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No benefits with id: ${id}`);

    const updatedBenefits = await Benefits.findByIdAndUpdate(id, benefits, { new: true });

    res.json(updatedBenefits);
}

exports.deleteBenefits = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No benefits with id: ${id}`);
    await Benefits.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}

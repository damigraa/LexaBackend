const darLineComponent = require("../../models/components/darkLineComponent")
const mongoose = require("mongoose")

exports.createDarkLineComponent = (req, res) => {
    try {
        const darkLineComponentObj = {
            titleOne: req.body.titleOne,
            titleTwo: req.body.titleTwo,
            descriptionOne: req.body.descriptionOne,
            descriptionTwo: req.body.descriptionTwo,
        }
        const darkLineC = new darLineComponent(darkLineComponentObj)
        darkLineC.save((error, darkLineC) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (darkLineC) return (
                res.status(201).json({ darkLineC, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getDarkLineComponent = (req, res) => {
    try {
        darLineComponent.find({}).exec((error, darkLineC) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (darkLineC) return (
                res.status(200).json({ darkLineC, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateDarkLineComponent = async (req, res) => {
    const { id } = req.params;
    const darkLineC = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No darkLineC with id: ${id}`);

    const updatedDarkLineComponent = await darLineComponent.findByIdAndUpdate(id, darkLineC, { new: true });

    res.json(updatedDarkLineComponent);
}

exports.deleteDarkLineComponent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No darkLineC with id: ${id}`);
    await darLineComponent.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}

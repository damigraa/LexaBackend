const ArchitectLi = require("../../models/components/architectLi")
const mongoose = require("mongoose")

exports.createArchitectLi = (req, res) => {
    try {
        const architectLiObj = {
            title: req.body.title,
            miniTitle: req.body.miniTitle,
            descriptionOne: req.body.descriptionOne,
            descriptionTwo: req.body.descriptionTwo,
            descriptionThree: req.body.contentDescription,
        }

        if (req.file) {
            architectLiObj.mainImg = req.file.filename;
        }
        const architectLi = new ArchitectLi(architectLiObj)
        architectLi.save((error, architectLi) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (architectLi) return (
                res.status(201).json({ architectLi, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getArchitectLi = (req, res) => {
    try {
        ArchitectLi.find({}).exec((error, architectLi) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (architectLi) return (
                res.status(200).json({ architectLi, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateArchitectLi = async (req, res) => {
    const { id } = req.params;
    const architectLi = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No architectLi with id: ${id}`);

    const updatedArchitectLi = await ArchitectLi.findByIdAndUpdate(id, architectLi, { new: true });

    res.json(updatedArchitectLi);
}

exports.deleteArchitectLi = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No architectLi with id: ${id}`);
    await ArchitectLi.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}

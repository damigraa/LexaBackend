const Architect = require("../../models/components/architect")
const mongoose = require("mongoose")

exports.createArchitect = (req, res) => {
    try {
        const architectObj = {
            headerTitle: req.body.headerTitle,
            textImage: req.body.textImage,
            contentTextLeft: req.body.contentTextLeft,
            contentTitle: req.body.contentTitle,
            contentDescription: req.body.contentDescription,
        }
        
        if (req.file) {
            architectObj.mainImg = req.file.filename;
        }
        const architect = new Architect(architectObj)
        architect.save((error, architect) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (architect) return (
                res.status(201).json({ architect, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getArchitects = (req, res) => {
    try {
        Architect.find({}).exec((error, architect) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (architect) return (
                res.status(200).json({ architect, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateArchitect = async (req, res) => {
    const { id } = req.params;
    const architect = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No architect with id: ${id}`);

    const updatedArchitect = await Architect.findByIdAndUpdate(id, architect, { new: true });

    res.json(updatedArchitect);
}

exports.deleteArchitect = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No architect with id: ${id}`);
    await Architect.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}

const ArchitectSkills = require("../../models/components/architectSkills")
const mongoose = require("mongoose")

exports.createArchitectSkills = (req, res) => {
    try {
        const architectSkillsObj = {
            title: req.body.title,
        }

        if (req.file) {
            architectSkillsObj.iconImg = req.file.filename;
        }
        const architectSkills = new ArchitectSkills(architectSkillsObj)
        architectSkills.save((error, architectSkills) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (architectSkills) return (
                res.status(201).json({ architectSkills, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getArchitectSkills = (req, res) => {
    try {
        ArchitectSkills.find({}).exec((error, architectSkills) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (architectSkills) return (
                res.status(200).json({ architectSkills, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateArchitectSkills = async (req, res) => {
    const { id } = req.params;
    const architectSkills = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No architectSkills with id: ${id}`);

    const updatedArchitectSkills = await ArchitectSkills.findByIdAndUpdate(id, architectSkills, { new: true });

    res.json(updatedArchitectSkills);
}

exports.deleteArchitectSkills = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No architectSkills with id: ${id}`);
    await ArchitectSkills.findByIdAndDelete(id);

    res.json({ message: "удален успешно" });
}

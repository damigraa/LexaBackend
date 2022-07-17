const AboutUs = require("../../models/aboutUs")
const mongoose = require("mongoose")

exports.createAboutUs = (req, res) => {
    try {
        const aboutUsObj = {
            title: req.body.title,
            titleDescription: req.body.titleDescription,
            nameCompany: req.body.nameCompany,
            description: req.body.description,
        }

        if (req.file) {
            aboutUsObj.aboutUsPicture = req.file.filename;
        }
        const con = new AboutUs(aboutUsObj)
        con.save((error, aboutUs) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (aboutUs) return (
                res.status(201).json({ aboutUs, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }       
}

exports.getAboutUs = (req, res) => {
    try {
        AboutUs.find({}).exec((error, aboutUs) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (aboutUs) return (
                res.status(200).json({ aboutUs, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateAboutUs = async (req, res) => {
    const { id } = req.params;
    const aboutUs = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No aboutUs with id: ${id}`);

    const updatedAboutUs = await AboutUs.findByIdAndUpdate(id, aboutUs, { new: true });

    res.json(updatedAboutUs);
}

exports.deleteAboutUs = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No aboutUs with id: ${id}`);
    await AboutUs.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}

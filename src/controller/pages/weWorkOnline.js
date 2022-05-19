const WeWorkOnline = require("../../models/components/weWorkOnline")
const mongoose = require("mongoose")

exports.createWeWorkOnline = (req, res) => {
    try {

        const weWorkOnlineObj = {
            stage: req.body.stage,
            title: req.body.title,
            description: req.body.description,
            buttonText: req.body.buttonText,
            buttonHref: req.body.buttonHref,
        }
        if (req.file) {
            weWorkOnlineObj.image = req.file.filename;
        }
        const weWorkOnline = new WeWorkOnline(weWorkOnlineObj)
        weWorkOnline.save((error, weWorkOnline) => {
            if (error) return res.status(400).json({ message: "Ошибка при создании!" })
            if (weWorkOnline) return (
                res.status(201).json({ weWorkOnline, message: "Создано успешно!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.getWeWorkOnline = (req, res) => {
    try {
        WeWorkOnline.find({}).exec((error, weWorkOnline) => {
            if (error) return res.status(400).json({ message: "Проблема при получении данных!" })
            if (weWorkOnline) return (
                res.status(200).json({ weWorkOnline, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.getWeWorkOnlineDetailsById = (req, res) => {
    const { weWorkOnlineId } = req.params;
    if (weWorkOnlineId) {
        WeWorkOnline.findOne({ _id: weWorkOnlineId }).exec((error, weWorkOnline) => {
            if (error) return res.status(400).json({ error });
            if (weWorkOnline) {
                res.status(200).json({ weWorkOnline });
            }
        });
    } else {
        return res.status(400).json({ error: "Params required" });
    }
};


exports.updateWeWorkOnline = async (req, res) => {
    const { id } = req.params;
    const weWorkOnline = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No weWorkOnline with id: ${id}`);

    const updatedWeWorkOnline = await WeWorkOnline.findByIdAndUpdate(id, weWorkOnline, { new: true });

    res.json(updatedWeWorkOnline);
}

exports.deleteWeWorkOnline = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No weWorkOnline with id: ${id}`);
    await WeWorkOnline.findByIdAndDelete(id);

    res.json({ message: "Блок удален успешно" });
}

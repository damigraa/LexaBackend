const ComeToUs = require("../../models/components/comeToUs")
const mongoose = require("mongoose")

exports.createComeToUs = (req, res) => {
    try {
        const { heading, description } = req.body
        const comeToUs = new ComeToUs({
            heading: heading,
            description: description
        })
        comeToUs.save((error, comeToUs) => {
            if (error) return res.status(400).json({ message: "Ошибка при создании!" })
            if (comeToUs) return (
                res.status(201).json({ comeToUs, message: "Создано успешно!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getComeToUs = (req, res) => {
    try {
        ComeToUs.find({}).exec((error, comeToUs) => {
            if (error) return res.status(400).json({ message: "Проблема при получении данных!" })
            if (comeToUs) return (
                res.status(200).json({ comeToUs, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}


exports.updateComeToUs = async (req, res) => {
    const { id } = req.params;
    const comeToUs = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No comeToUs with id: ${id}`);

    const updateComeToUs = await ComeToUs.findByIdAndUpdate(id, comeToUs, { new: true });

    res.status(204).json(updateComeToUs);
}



exports.deleteComeToUs = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No comeToUs with id: ${id}`);
    await ComeToUs.findByIdAndDelete(id);

    res.json({ message: "Пост удален успешно" });
}

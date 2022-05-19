const Workshop = require("../../models/pages/workshop")

exports.createWorkshop = (req, res) => {
    try {
        const {
            heading,
            pictureOne,
            descriptionOne,
            pictureTwo,
            headingTwo,
            descriptionTwo,
            listTwo,
            pictureThree,
            headingThree,
            descriptionThree,
            listThree,
        } = req.body
        const workshop = new Workshop({
            heading: heading,
            pictureOne: pictureOne,
            descriptionOne: descriptionOne,
            pictureTwo: pictureTwo,
            headingTwo: headingTwo,
            descriptionTwo: descriptionTwo,
            listTwo: listTwo,
            pictureThree: pictureThree,
            headingThree: headingThree,
            descriptionThree: descriptionThree,
            listThree: listThree
        })
        workshop.save((error, result) => {
            if (error) return res.status(400).json({ message: "Ошибка при создании!" })
            if (result) return (
                res.status(201).json({ result, message: "Создано успешно!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getWorkshop = (req, res) => {
    try {
        Workshop.find({}).exec((error, workshop) => {
            if (error) return res.status(400).json({ message: "Не удалось получить данные!" })
            if (workshop) return (
                res.status(200).json({ workshop, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)

    }
}

exports.updateWorkshop = async (req, res) => {
    try {
        const payload = req.body
        if (payload._id) {
            const updateWorkshop = await Workshop.findOneAndUpdate(
                { _id: payload._id },
                payload,
                { new: true }
            )
            return res.status(200).json({ updateWorkshop, message: "Обновление прошло успешно" })
        } else {
            res.status(400).json({ message: "Id не найден" })
        }
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.deleteWorkshop = (req, res) => {
    try {
        const { _id } = req.body
        Workshop.deleteOne({ _id }).exec((error, result) => {
            if (error) return res.status(202).json({ message: "Id не найден!" })
            if (result) return res.status(400).json({ result, message: "Удаление прошли успешно" })
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}
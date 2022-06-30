const PaymentList = require("../../models/components/paymentList")
const mongoose = require("mongoose")

exports.createPaymentList = (req, res) => {
    try {

        const paymentListObj = {
            title: req.body.title,
            description: req.body.description
        }

        if (req.file) {
            paymentListObj.iconImg = req.file.filename;
        }
        const pay = new PaymentList(paymentListObj)
        pay.save((error, paymentList) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (paymentList) return (
                res.status(201).json({ paymentList, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getPaymentList = (req, res) => {
    try {
        PaymentList.find({}).exec((error, paymentList) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (paymentList) return (
                res.status(200).json({ paymentList, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.updatePaymentList = async (req, res) => {
    try {
        const { id } = req.params
        const paymentList = req.body

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`No paymentList with id: ${id}`)
        const updatedPaymentList = await PaymentList.findByIdAndUpdate(id, paymentList, { new: true })

        res.json(updatedPaymentList)
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.deletePaymentList = async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json(`No paymentList with id: ${id}`)
        await PaymentList.findByIdAndDelete(id)
    } catch (e) {
        res.status(500).json(e)
    }
}
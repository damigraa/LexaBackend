const PaymentLI = require("../models/paymentListInstruction")
const mongoose = require("mongoose")


exports.createPaymentLI = (req, res) => {
    try {
        const paymentLIObj = {
            text: req.body.text,
        }
        const paymentLI = new PaymentLI(paymentLIObj)
        paymentLI.save((error, paymentLI) => {
            if (error) return res.status(400).json({ error });
            if (paymentLI) {
                res.status(201).json({ paymentLI });
            }
        })
    } catch (e) {
        res.status(500).json(e)
    }
}


exports.getPaymentLI = (req, res) => {
    PaymentLI.find({}).exec((error, paymentLI) => {
        if (error) return res.status(400).json({ message: "Не удалось получить данные" })
        if (paymentLI) {
            return res.status(200).json({ paymentLI, message: "Данные успешно получены" })
        }
    })
}


exports.updatePaymentLI = async (req, res) => {
    const { id } = req.params;
    const paymentLI = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No paymentLI with id: ${id}`);

    const updatedPaymentLI = await PaymentLI.findByIdAndUpdate(id, paymentLI, { new: true });

    res.json(updatedPaymentLI);
}


exports.deletePaymentLI = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No paymentLI with id: ${id}`);
    await PaymentLI.findByIdAndDelete(id);

    res.json({ message: "Блок успешно удален!" });
}
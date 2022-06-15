const mongoose = require("mongoose")
const DeliveryInfo = require("../models/deliveryInfo")



exports.createDeliveryInfo = (req, res) => {
    try {
        const deliveryInfoObj = {
            title: req.body.title,
            description: req.body.description,
            deliveryTime: req.body.deliveryTime,

        }
        const deliveryInfo = new DeliveryInfo(deliveryInfoObj)
        deliveryInfo.save((error, deliveryInfo) => {
            if (error) return res.status(400).json({ error });
            if (deliveryInfo) {
                res.status(201).json({ deliveryInfo });
            }
        })
    } catch (e) {
        res.status(500).json(e)
    }
}


exports.getDeliveryInfo = (req, res) => {
    DeliveryInfo.find({}).exec((error, deliveryInfo) => {
        if (error) return res.status(400).json({ message: "Не удалось получить данные" })
        if (deliveryInfo) {
            return res.status(200).json({ deliveryInfo, message: "Данные успешно получены" })
        }
    })
}


exports.updateDeliveryInfo = async (req, res) => {
    const { id } = req.params;
    const deliveryInfo = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No deliveryInfo with id: ${id}`);

    const updatedDeliveryInfo = await DeliveryInfo.findByIdAndUpdate(id, deliveryInfo, { new: true });

    res.json(updatedDeliveryInfo);
}


exports.deleteDeliveryInfo = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No deliveryInfo with id: ${id}`);
    await DeliveryInfo.findByIdAndDelete(id);

    res.json({ message: "Блок успешно удален!" });
}
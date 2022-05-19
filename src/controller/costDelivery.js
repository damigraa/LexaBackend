const mongoose = require("mongoose")
const CostDelivery = require("../models/costDelivery")



exports.createCostDelivery = (req, res) => {
    try {
        const costDeliveryObj = {
            city: req.body.city,
            price: req.body.price,
            deliveryTime: req.body.deliveryTime
        }
        const costDelivery = new CostDelivery(costDeliveryObj)
        costDelivery.save((error, costDelivery) => {
            if (error) return res.status(400).json({ error });
            if (costDelivery) {
                res.status(201).json({ costDelivery });
            }
        })
    } catch (e) {
        res.status(500).json(e)
    }
}


exports.getCostDelivery = (req, res) => {
    CostDelivery.find({}).exec((error, costDelivery) => {
        if (error) return res.status(400).json({ message: "Не удалось получить данные" })
        if (costDelivery) {
            return res.status(200).json({ costDelivery, message: "Данные успешно получены" })
        }
    })
}


exports.updateCostDelivery = async (req, res) => {
    const { id } = req.params;
    const costDelivery = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No costDelivery with id: ${id}`);

    const updatedCostDelivery = await CostDelivery.findByIdAndUpdate(id, costDelivery, { new: true });

    res.json(updatedCostDelivery);
}


exports.deleteCostDelivery = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No costDelivery with id: ${id}`);
    await CostDelivery.findByIdAndDelete(id);

    res.json({ message: "Блок успешно удален!" });
}
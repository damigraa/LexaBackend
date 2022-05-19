const Promotion = require("../../models/components/promotions")
const mongoose = require("mongoose")


exports.createPromotions = (req, res) => {
    try {
        const promotionObj = {
            title: req.body.title,
            description: req.body.description
        }
        if (req.file) {
            promotionObj.iconImg =  req.file.filename;
        }
        const con = new Promotion(promotionObj)
        con.save((error, contact) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (contact) return (
                res.status(201).json({ contact, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getPromotions = (req, res) => {
    try {
        Promotion.find({}).exec((error, promotion) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (promotion) return (
                res.status(200).json({ promotion, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getPromotionDetailsById = (req, res) => {
    const { promotionId } = req.body.payload;
    if (promotionId) {
        Promotion.findOne({ _id: promotionId }).exec((error, promotion) => {
            if (error) return res.status(400).json({ error });
            if (promotion) {
                res.status(200).json({ promotion });
            }
        });
    } else {
        return res.status(400).json({ error: "Params required" });
    }
};
exports.updatePromotions = async (req, res) => {
    const { id } = req.params;
    const promotion = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No promotion with id: ${id}`);

    const updatedPromotion = await Promotion.findByIdAndUpdate(id, promotion, { new: true });

    res.json(updatedPromotion);
}

exports.deletePromotions = (req, res) => {
    try {
        const { promotionId } = req.body.payload;
        if (promotionId) {
            Promotion.deleteOne({ _id: promotionId }).exec((error, result) => {
                if (error) return res.status(400).json({ error })
                if (result) return res.status(202).json({ result, message: "Удаление прошло успешно!" })
            })
        }
    } catch (e) {
        res.status(500).json(e.message)
    }
}
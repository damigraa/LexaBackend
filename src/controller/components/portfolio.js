const mongoose = require("mongoose")
const slugify = require("slugify");
const Portfolio = require("../../models/components/portfolio");

exports.createPortfolio = (req, res) => {
    try {
        const { title, titleTwo, city, description, videoHref } = req.body
        let images = []

        if (req.files.length > 0) {
            images = req.files.map((file) => {
                return { img: file.filename };
            });
        }
        const portfolio = new Portfolio({
            title: title,
            titleTwo: titleTwo,
            city,
            slug: slugify(title),
            videoHref,
            description,
            images
        });
        portfolio.save((error, portfolio) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (portfolio) return (
                res.status(201).json({ portfolio, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getPortfolio = (req, res) => {
    try {
        Portfolio.find({}).exec((error, portfolio) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (portfolio) return (
                res.status(200).json({ portfolio, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updatePortfolio = async (req, res) => {
    const { id } = req.params;
    const portfolio = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No portfolio with id: ${id}`);

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(id, portfolio, { new: true });

    res.json(updatedPortfolio);
}

exports.deletePortfolio = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No portfolio with id: ${id}`);
    await Portfolio.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}



exports.getPortfolioDetailsById = (req, res) => {
    const { portfolioId } = req.params;
    if (portfolioId) {
        Portfolio.findOne({ _id: portfolioId }).exec((error, portfolio) => {
            if (error) return res.status(400).json({ error });
            if (portfolio) {
                res.status(200).json({ portfolio });
            }
        });
    } else {
        return res.status(400).json({ error: "Params required" });
    }
};



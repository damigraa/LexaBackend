const Blog = require("../../models/components/contact")
const mongoose = require("mongoose")

exports.createBlog = (req, res) => {
    try {
        const blogObj = {
            title: req.body.title,
            description: req.body.description,
            href: req.body.href
        }

        if (req.file) {
            blogObj.iconImg = req.file.filename;
        }
        const blo = new Blog(blogObj)
        blo.save((error, contact) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (contact) return (
                res.status(201).json({ contact, message: "Успешно создано!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getBlog = (req, res) => {
    try {
        Blog.find({}).exec((error, blog) => {
            if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
            if (blog) return (
                res.status(200).json({ blog, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e)
    }
}

exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const blog = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);

    const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });

    res.json(updatedBlog);
}

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
    await Blog.findByIdAndDelete(id);

    res.json({ message: "контакт удален успешно" });
}

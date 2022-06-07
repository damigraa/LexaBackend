const mongoose = require("mongoose")
const slugify = require("slugify");
const Blog = require("../../models/components/blog");

exports.createBlog = (req, res) => {
    try {
        const { title, description, videoHref } = req.body
        let images = []

        if (req.files.length > 0) {
            images = req.files.map((file) => {
                return { img: file.filename };
            });
        }
        const blog = new Blog({
            title: title,
            slug: slugify(title),
            videoHref,
            description,
            images
        });
        blog.save((error, blog) => {
            if (error) return res.status(400).json({ error, message: "Ошибка при создании!" })
            if (blog) return (
                res.status(201).json({ blog, message: "Успешно создано!" })
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



exports.getBlogDetailsById = (req, res) => {
    const { blogId } = req.params;
    if (blogId) {
        Blog.findOne({ _id: blogId }).exec((error, blog) => {
            if (error) return res.status(400).json({ error });
            if (blog) {
                res.status(200).json({ blog });
            }
        });
    } else {
        return res.status(400).json({ error: "Params required" });
    }
};



const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const router = express.Router()
const { createBlog, getBlog, updateBlog, deleteBlog, getBlogDetailsById } = require('../../controller/components/blog')


router.post("/blog/create", upload.any("images"), createBlog)
router.get("/blog/get", getBlog)
router.patch("/blog/update/:id", updateBlog)
router.delete("/blog/delete/:id", deleteBlog)
router.get("/blog/:blogId", getBlogDetailsById)


module.exports = router
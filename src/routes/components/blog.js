const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const router = express.Router()
const {createBlog, getBlog, updateBlog, deleteBlog} = require('../../controller/components/blog')


router.post("/blog/create", upload.single("iconImg"), createBlog)
router.get("/blog/get", getBlog)
router.patch("/blog/update/:id", updateBlog)
router.delete("/blog/delete/:id", deleteBlog)

module.exports = router
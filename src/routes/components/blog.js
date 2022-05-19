const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const router = express.Router()


router.post("/blog/create", upload.single("iconImg"), createBlog)
router.get("/blog/get", getBlog)
router.patch("/blog/update/:id", requireSignin, adminMiddleware, updateBlog)
router.delete("/blog/delete/:id", requireSignin, adminMiddleware, deleteBlog)

module.exports = router
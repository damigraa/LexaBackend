const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createMainImage, getMainImage, deleteMainImage, updateMainImage, updatePost } = require("../../controller/mainImage");


router.post("/mainImage/create", requireSignin, adminMiddleware, upload.single('image'), createMainImage)
router.get("/mainImage/get", getMainImage)
router.delete("/mainImage/delete", requireSignin, adminMiddleware, deleteMainImage)
router.patch('/mainImage/updateMainImage/:id', requireSignin, adminMiddleware, updateMainImage);

module.exports = router;


const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../common-middleware");
const { createGallery, getGallery, deleteGalleryById } = require("../controller/gallery")

const router = express.Router();


router.post("/gallery/create", requireSignin, adminMiddleware, upload.any("galleryPictures"), createGallery);
router.delete("/gallery/deleteGalleryById",requireSignin,  adminMiddleware,  deleteGalleryById
);
router.get("/gallery/getGallery", getGallery);

module.exports = router;

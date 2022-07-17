const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createAboutUs, getAboutUs, updateAboutUs, deleteAboutUs, } = require('../../controller/components/aboutUs')
const router = express.Router()


router.post("/aboutUs/create", upload.single("aboutUsPicture"), createAboutUs)
router.get("/aboutUs/get", getAboutUs)
router.patch("/aboutUs/update/:id", requireSignin, adminMiddleware, updateAboutUs)
router.delete("/aboutUs/delete/:id", deleteAboutUs)

module.exports = router
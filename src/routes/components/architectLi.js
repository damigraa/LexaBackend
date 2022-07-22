const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createArchitectLi, getArchitectLi, updateArchitectLi, deleteArchitectLi } = require('../../controller/components/architectLi')
const router = express.Router()


router.post("/architectLi/create", requireSignin, adminMiddleware, upload.single("mainImg"), createArchitectLi)
router.get("/architectLi/get", getArchitectLi)
router.patch("/architectLi/update/:id", requireSignin, adminMiddleware, updateArchitectLi)
router.delete("/architectLi/delete/:id", requireSignin, adminMiddleware, deleteArchitectLi)

module.exports = router
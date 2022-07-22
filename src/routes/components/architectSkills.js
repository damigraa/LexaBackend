const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createArchitectSkills, getArchitectSkills, updateArchitectSkills, deleteArchitectSkills } = require('../../controller/components/architectSkills')
const router = express.Router()


router.post("/architectSkills/create", requireSignin, adminMiddleware, upload.single("iconImg"), createArchitectSkills)
router.get("/architectSkills/get", getArchitectSkills)
router.patch("/architectSkills/update/:id", requireSignin, adminMiddleware, updateArchitectSkills)
router.delete("/architectSkills/delete/:id", requireSignin, adminMiddleware, deleteArchitectSkills)

module.exports = router
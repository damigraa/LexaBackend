const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createArchitect, getArchitects, updateArchitect, deleteArchitect } = require('../../controller/components/architect')
const router = express.Router()


router.post("/architect/create", requireSignin, adminMiddleware, upload.single("mainImg"), createArchitect)
router.get("/architect/get", getArchitects)
router.patch("/architect/update/:id", requireSignin, adminMiddleware, updateArchitect)
router.delete("/architect/delete/:id", requireSignin, adminMiddleware, deleteArchitect)

module.exports = router
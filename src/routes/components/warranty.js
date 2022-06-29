const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createWarranty, getWarranty, updateWarranty, deleteWarranty } = require('../../controller/components/warranty')
const router = express.Router()


router.post("/warranty/create", requireSignin, adminMiddleware, upload.single("iconImg"), createWarranty)
router.get("/warranty/get", getWarranty)
router.patch("/warranty/update/:id", requireSignin, adminMiddleware, updateWarranty)
router.delete("/warranty/delete/:id", requireSignin, adminMiddleware, deleteWarranty)

module.exports = router
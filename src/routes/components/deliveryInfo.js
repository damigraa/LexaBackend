const express = require("express")
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware")
const { createDeliveryInfo, getDeliveryInfo, updateDeliveryInfo, deleteDeliveryInfo, } = require("../../controller/deliveryInfo")

const router = express.Router()

router.post("/deliveryInfo/create", requireSignin, adminMiddleware, upload.single("iconImg"), createDeliveryInfo)
router.get("/deliveryInfo/get", getDeliveryInfo)
router.patch("/deliveryInfo/update/:id", updateDeliveryInfo)
router.delete("/deliveryInfo/delete/:id", deleteDeliveryInfo)

module.exports = router

const express = require("express")
const { requireSignin, adminMiddleware } = require("../../common-middleware")
const { createDeliveryInfo, getDeliveryInfo, updateDeliveryInfo, deleteDeliveryInfo, } = require("../../controller/deliveryInfo")

const router = express.Router()

router.post("/deliveryInfo/create",  createDeliveryInfo)
router.get("/deliveryInfo/getAll", getDeliveryInfo)
router.patch("/deliveryInfo/update/:id", updateDeliveryInfo)
router.delete("/deliveryInfo/delete/:id", deleteDeliveryInfo)

module.exports = router

const express = require("express")
const { requireSignin, adminMiddleware } = require("../../common-middleware")
const { createCostDelivery, getCostDelivery, updateCostDelivery, deleteCostDelivery } = require("../../controller/costDelivery")

const router = express.Router()

router.post("/costDelivery/create", requireSignin, adminMiddleware, createCostDelivery)
router.get("/costDelivery/get", getCostDelivery)
router.patch("/costDelivery/update/:id", requireSignin, adminMiddleware, updateCostDelivery)
router.delete("/costDelivery/delete/:id", requireSignin, adminMiddleware, deleteCostDelivery)

module.exports = router

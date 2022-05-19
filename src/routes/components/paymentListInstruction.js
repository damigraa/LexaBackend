const express = require("express")
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware")
const { createPaymentLI, getPaymentLI, updatePaymentLI, deletePaymentLI } = require("../../controller/paymentListInstruction")

const router = express.Router()

router.post("/paymentLI/create", requireSignin, adminMiddleware, createPaymentLI)
router.get("/paymentLI/get", getPaymentLI)
router.patch("/paymentLI/update/:id", requireSignin, adminMiddleware, updatePaymentLI)
router.delete("/paymentLI/delete/:id", requireSignin, adminMiddleware, deletePaymentLI)

module.exports = router
 
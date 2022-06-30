const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createPaymentList, getPaymentList, updatePaymentList, deletePaymentList } = require('../../controller/components/paymentList')
const router = express.Router()


router.post("/paymentList/create", requireSignin, adminMiddleware, upload.single("iconImg"), createPaymentList)
router.get("/paymentList/get", getPaymentList)
router.patch("/paymentList/update/:id", requireSignin, adminMiddleware, updatePaymentList)
router.delete("/paymentList/delete/:id", requireSignin, adminMiddleware, deletePaymentList)

module.exports = router
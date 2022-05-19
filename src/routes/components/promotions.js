const express = require("express")
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware")
const { createPromotions, getPromotions, updatePromotions, deletePromotions, getPromotionDetailsById } = require("../../controller/components/promotions")

const router = express.Router()

router.post("/promotions/create", requireSignin, adminMiddleware, upload.single("iconImg"), createPromotions)
router.get("/promotions/get", getPromotions)
router.get("/promotion/promotionId", getPromotionDetailsById)
router.patch("/promotions/update/:id", requireSignin, adminMiddleware, updatePromotions)
router.delete("/promotions/delete", requireSignin, adminMiddleware, deletePromotions)

module.exports = router
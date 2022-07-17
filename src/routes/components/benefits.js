const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createBenefits, getBenefits, updateBenefits, deleteBenefits, } = require('../../controller/components/benefits')
const router = express.Router()


router.post("/benefits/create", createBenefits)
router.get("/benefits/get", getBenefits)
router.patch("/benefits/update/:id", requireSignin, adminMiddleware, updateBenefits)
router.delete("/benefits/delete/:id", deleteBenefits)

module.exports = router
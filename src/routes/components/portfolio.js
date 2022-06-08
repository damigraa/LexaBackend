const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createPortfolio, getPortfolio, updatePortfolio, deletePortfolio, getPortfolioDetailsById } = require('../../controller/components/portfolio')
const router = express.Router()


router.post("/portfolio/create", requireSignin, adminMiddleware, upload.any("images"), createPortfolio)
router.get("/portfolio/get", getPortfolio)
router.patch("/portfolio/update/:id", updatePortfolio)
router.delete("/portfolio/delete/:id", deletePortfolio)
router.get("/portfolio/portfolioDetails/:portfolioId", getPortfolioDetailsById)

 
module.exports = router
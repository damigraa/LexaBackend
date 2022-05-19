const express = require("express")
const { requireSignin, adminMiddleware } = require("../../common-middleware")
const { createComeToUs, getComeToUs, updateComeToUs, deleteComeToUs } = require("../../controller/components/ComeToUs")

const router = express.Router()

router.post("/comeToUs/create", requireSignin, adminMiddleware, createComeToUs)
router.get("/comeToUs/get", getComeToUs)
router.patch("/comeToUs/updateComeToUs/:id", requireSignin, adminMiddleware, updateComeToUs)
router.delete("/comeToUs/deleteComeToUs/:id", requireSignin, adminMiddleware, deleteComeToUs)

module.exports = router 
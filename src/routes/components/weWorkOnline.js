const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createWeWorkOnline, getWeWorkOnline, getWeWorkOnlineDetailsById, updateWeWorkOnline, deleteWeWorkOnline } = require("../../controller/pages/weWorkOnline");


router.post("/weWorkOnline/create", requireSignin, adminMiddleware, upload.single('image'), createWeWorkOnline)
router.get("/weWorkOnline/get", getWeWorkOnline)
router.patch("/weWorkOnline/update/:id", requireSignin, adminMiddleware, updateWeWorkOnline)
router.delete("/weWorkOnline/delete/:id", requireSignin, adminMiddleware, deleteWeWorkOnline)
router.get("/weWorkOnline/:weWorkOnlineId", requireSignin, adminMiddleware, getWeWorkOnlineDetailsById)

module.exports = router;


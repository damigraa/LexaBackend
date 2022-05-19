const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware");
const { createEngraving, getEngravingDetailsById, deleteEngravingById, getEngraving, updateEngravingById, createEngravingCatalog } = require("../../controller/admin/engraving");



router.post("/engraving/create", upload.single("engImage"), createEngraving)
router.post("/engraving/createCatalog", requireSignin, adminMiddleware, upload.single("engImage"), createEngravingCatalog)
router.get("/engraving/get", getEngraving)
router.get("/engraving/:engravingId", getEngravingDetailsById)
router.patch("/engraving/update/:id", requireSignin, adminMiddleware, updateEngravingById)
router.delete("/engraving/delete/:id", requireSignin, adminMiddleware, deleteEngravingById)

module.exports = router;


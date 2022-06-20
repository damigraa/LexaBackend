const express = require("express");
const { requireSignin, adminMiddleware, upload } = require("../common-middleware");

const router = express.Router();
const { applicationCreate, getApplications, searchApplication, deleteApplicationById } = require("../controller/application");

router.post("/application/create", upload.any("samplePhoto"), applicationCreate,);
router.get("/application/getApplications", requireSignin, adminMiddleware, getApplications);
router.get("/application/getApplications/search", requireSignin, adminMiddleware, searchApplication);
router.delete("/application/delete/:id", requireSignin, adminMiddleware, deleteApplicationById);

module.exports = router;
 
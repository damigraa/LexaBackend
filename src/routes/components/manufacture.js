const express = require("express")
const { requireSignin, adminMiddleware, upload } = require("../../common-middleware")
const { createManufacture, getManufacture, updateManufacture, deleteManufacture } = require("../../controller/manufacture")
const router = express.Router()


router.post("/manufacture/create", requireSignin, adminMiddleware, upload.single('iconImg'), createManufacture)
router.get("/manufacture/get", getManufacture)
router.patch("/manufacture/update/:id", requireSignin, adminMiddleware, updateManufacture)
router.delete("/manufacture/delete/:id", requireSignin, adminMiddleware, deleteManufacture)


module.exports = router  
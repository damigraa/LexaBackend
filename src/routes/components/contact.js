const express = require('express')
const { requireSignin, adminMiddleware, upload } = require('../../common-middleware')
const { createContact, updateContact, deleteContact, getContacts } = require('../../controller/components/contact')
const router = express.Router()


router.post("/contact/create", requireSignin, adminMiddleware, createContact)
router.get("/contact/get", getContacts)
router.patch("/contact/update/:id", requireSignin, adminMiddleware, updateContact)
router.delete("/contact/delete/:id", requireSignin, adminMiddleware, deleteContact)

module.exports = router
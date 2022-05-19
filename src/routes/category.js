const express = require('express');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../controller/category');
const { requireSignin, adminMiddleware, upload } = require('../common-middleware');
const router = express.Router();


router.post('/category/create', requireSignin, adminMiddleware, upload.single('categoryImage'), addCategory);
router.get('/category/getcategory', getCategories);
router.post('/category/update', upload.array('categoryImage'), updateCategories);
router.post('/category/delete', deleteCategories);

module.exports = router;
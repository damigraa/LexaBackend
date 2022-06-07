const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware, upload } = require("../common-middleware");
const {
  createProduct,
  getProductsBySlug,
  getProductDetailsById,
  deleteProductById,
  getProducts,
  searchFile,
  updateProduct,
} = require("../controller/product");



router.post("/product/create", requireSignin, adminMiddleware, upload.any("productPicture"), createProduct)
router.get("/product/getProducts", getProducts)
router.patch("/product/update/:id", requireSignin, adminMiddleware, updateProduct)
router.delete("/product/delete/:id", requireSignin, adminMiddleware, deleteProductById)
router.get("/products/:slug", getProductsBySlug)
router.get("/products/:slug/search", searchFile)
router.get("/product/getProducts/search", requireSignin, adminMiddleware, searchFile)
router.get("/product/:productId", getProductDetailsById)

module.exports = router;


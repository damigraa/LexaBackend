const express = require("express");
const { requireSignin, adminMiddleware } = require("../../common-middleware");
const { updateOrder, getCustomerOrders, searchOrder} = require('../../controller/admin/order.admin');
const router = express.Router();

router.post('/order/update', requireSignin, adminMiddleware, updateOrder);
router.post('/order/getCustomerOrders', requireSignin, adminMiddleware, getCustomerOrders);
router.get('/order/getCustomerOrders/search', requireSignin, adminMiddleware, searchOrder);

module.exports = router;

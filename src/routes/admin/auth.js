const express = require('express');
const { signup, signin, signout, getAllUsers, searchUsers } = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');
const { requireSignin, adminMiddleware } = require('../../common-middleware');
const router = express.Router();


router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/admin/signout', signout)
router.get('/admin/getUsers', requireSignin, adminMiddleware, getAllUsers)
router.get('/admin/getUsers/search', requireSignin, adminMiddleware, searchUsers)


module.exports = router;
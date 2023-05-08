const express = require('express');
const router = express.Router();
const verifyJwt = require('../middlewares/verifyJwt');

const {signIn, signUp, getUser} = require('../controllers/user.controller');

router.post('/api/login',signIn);
router.post('/api/signup', signUp);
router.get('/api/user/:email',verifyJwt ,getUser);

module.exports = router;
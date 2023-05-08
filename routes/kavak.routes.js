const express = require('express');
const router = express.Router();

const kavakController = require('../controllers/kavak.controller');

router.get('/api/kavak', kavakController.getByMark);

module.exports = router;
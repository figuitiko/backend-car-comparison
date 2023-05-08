const express = require('express');
const router = express.Router();

const brandController = require('../controllers/brand.controller');

router.get('/api/brands', brandController.getBrands);
router.post('/api/brands', brandController.addBrand);
router.delete('/api/brands/:brandId', brandController.removeBrand);
router.post('/api/brands/:brandId', brandController.addCarModelsToBrand);
router.delete('/api/brands/:brandId/models', brandController.removeModelsFromBrand);
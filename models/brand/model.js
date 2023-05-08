const {model} = require('mongoose');

const brandSchema = require('./schema');
const BrandModel = model('Brand', brandSchema);

module.exports = BrandModel;
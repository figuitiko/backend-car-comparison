const {model} = require('mongoose');

const modelOfCarSchema = require('./schema');
const ModelOfCarModel = model('ModelOfCar', modelOfCarSchema);

module.exports = ModelOfCarModel;
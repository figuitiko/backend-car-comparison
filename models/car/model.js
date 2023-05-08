const {model} = require('mongoose');
const carSchema = require('./schema');
const carModel = model('Car', carSchema);

module.exports = carModel;
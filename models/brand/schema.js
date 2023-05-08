const { Schema } = require('mongoose');
const modelOfCar = require('../model-of-car/model');
const brandSchema = new Schema({
    brandName: { type: String, required: true },   
    modelOfCars: [{ type: Schema.Types.ObjectId, ref: 'ModelOfCar' }],

});

module.exports = brandSchema;

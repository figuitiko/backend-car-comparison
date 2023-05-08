const { Schema } = require('mongoose');

const  carSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: String, required: true },
    carName: { type: String, required: true },
    siteCars: { type: Schema.Types.ObjectId, ref: 'SiteCars' },
});

module.exports = carSchema;
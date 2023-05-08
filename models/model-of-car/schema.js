const {Schema} = require('mongoose');

const modelOfCarSchema = new Schema({
    modelName: { type: String, required: true },
});

module.exports = modelOfCarSchema;
const {Schema} = require('mongoose');

const siteCarsSchema = new Schema({
    siteTitle: { type: String, required: true, unique: true },
    siteUrl: { type: String, required: true },
});

module.exports = siteCarsSchema;
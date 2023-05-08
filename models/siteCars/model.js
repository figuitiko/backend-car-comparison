const {model} = require('mongoose');
const siteCarsSchema = require('./schema');
const siteCarsModel = model('SiteCars', siteCarsSchema);

module.exports = siteCarsModel;
const {model} = require('mongoose');

const userSchema = require('./schema');
const UserModel = model('User', userSchema);

module.exports = UserModel;
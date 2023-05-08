const { Schema } = require('mongoose');

const userSchema = new  Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false },    
});

module.exports = userSchema;
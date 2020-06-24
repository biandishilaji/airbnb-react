const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String
}) 

// cria a model 
module.exports = mongoose.model('user', UserSchema);
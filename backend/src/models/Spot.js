const mongoose = require('mongoose')

const SpoctSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String], 
    user : {
        // type grava apenas o Id do usuário que criou o Spot
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    // [STRING] = define um array apenas de string
},
{
    // ## conf
    // spot em json, ele calcula os virtuals aqui
    toJSON: {
        virtuals: true,
    }
});
// ## criar atributo virtual
SpoctSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:1234/files/${this.thumbnail}`
})
// cria a model 
module.exports = mongoose.model('spot', SpoctSchema);
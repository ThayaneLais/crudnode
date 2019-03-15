var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crudnode');

var userSchema = new mongoose.Schema({
    nome: String,
    Descricao: String,
    preco: String
}, {collection: 'usercollection'});

module.exports = {Mongoose: mongoose, UserSchema: userSchema}

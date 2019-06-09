const mongoose = require("mongoose");


// cada schema equivale a uma coleção
var Schema = mongoose.Schema;

// crio uma nova coleção
var MaravilhosaSchema = new Schema({

    nome: { type: String, default: true },
    profissao: { type: String, default: true },
    anosVida: { type: Number, default: true },
    img: { data: Buffer, contentType: String }
});

// //retorno o _id no campo id para manter compatibilidade com o front
MaravilhosaSchema.virtual("id").get(function() {
    return this._id;
});

// exporto este módulo
const maravilhosas = mongoose.model("maravilhosas", MaravilhosaSchema);

module.exports = maravilhosas;
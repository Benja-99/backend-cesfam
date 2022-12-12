const { Schema, model } = require('mongoose')

const medicamentoSchema = new Schema ({
    nombre: String,
    codigo: String,
    desc: String,
    fab: String,
    tipo: String,
    comp: [String],
    contenido: String,
    gramaje: Number,
    cantidad: Number,
})

const Medicamento = model('Medicamento', medicamentoSchema)
module.exports = { Medicamento }
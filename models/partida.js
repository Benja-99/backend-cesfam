const { Schema, model } = require('mongoose')

const partidaSchema = new Schema({
    fecha: Date,
    prescripcion: {
        type: Object,
        ref: 'Prescripcion'
    },
    nombreR: String
})

const Partida = model('Partida', partidaSchema)
module.exports = { Partida }
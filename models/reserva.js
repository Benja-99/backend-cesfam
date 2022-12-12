const { Schema, model } = require('mongoose')

const reservaSchema = new Schema({
    paciente: {
        type: Object,
        ref: 'Paciente'
    },
    medicamento: {
        type: Object,
        ref: 'Medicamento'
    }

})

const Reserva = model('Reserva', reservaSchema)
module.exports = { Reserva }
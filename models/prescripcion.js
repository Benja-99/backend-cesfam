const { Schema, model } = require('mongoose')

const prescripcionSchema = new Schema({
    fecha: String,
    cesfam: {
        type: Object,
        ref: 'Cesfam'
    },
    medico: {
        type: Object,
        ref: 'Medico'
    },
    paciente: {
        type: Object,
        ref: 'Paciente'
    },
    medicamentos: [{
        type: Object,
        ref: 'Medicamento'
    }]
})

const Prescripcion = model('Prescripcion', prescripcionSchema)
module.exports = { Prescripcion }
const { Schema, model } = require('mongoose')


const pacienteSchema = new Schema({
    rut: String,
    numCarnet: Number,
    nombre: String,
    prescripciones: [{
        type: Object,
        ref: 'Prescripcion'
    }],
    cesfam: {
        type: Object,
        ref: 'Cesfam'
    },
    medico: {
        type: Object,
        ref: 'Medico'
    }

})

const Paciente = model('Paciente', pacienteSchema)
module.exports = { Paciente }

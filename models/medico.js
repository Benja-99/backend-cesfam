const { Schema, model } = require('mongoose')


const medicoSchema = new Schema({
    rut: String,
    nombre: String,
    pass: String,
    prescripciones: [{
        type: Object,
        ref: 'Prescripcion'
    }],
    pacientes: [{
        type: Object,
        ref: 'Paciente'
    }],
    cesfam: {
        type: Object,
        ref: 'Cesfam'
    }

})

const Medico = model('Medico', medicoSchema)
module.exports = { Medico }
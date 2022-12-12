const { Schema, model } = require('mongoose')

const recetaSchema = new Schema ({
    paciente: {
        type: Object,
        ref: 'Paciente'
    },
    medico: {
        type: Object,
        ref: 'Medico'
    },
    medicamentos: [{
        type: Object,
        ref: 'Medicamento'
    }]
})

const Receta = model('Receta', recetaSchema)
module.exports = { Receta }
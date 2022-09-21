import { model, Schema } from 'mongoose'

const recetaSchema = new Schema ({
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    medico: {
        type: Schema.Types.ObjectId,
        ref: 'Medico'
    },
    medicamentos: [{
        type: Schema.Types.ObjectId,
        ref: 'Medicamento'
    }]
})

export default model('Receta', recetaSchema)
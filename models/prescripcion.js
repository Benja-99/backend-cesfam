import { Schema, model} from "mongoose"

const prescripcionSchema = new Schema({
    fecha: String,
    cesfam: {
        type: Schema.Types.ObjectId,
        ref: 'Cesfam'
    },
    medico: {
        type: Schema.Types.ObjectId,
        ref: 'Medico'
    },
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    medicamentos: [{
        type: Schema.Types.ObjectId,
        ref: 'Medicamento'
    }]
})

export default model('Usuario', usuarioSchema)
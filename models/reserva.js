import { model, Schema } from 'mongoose'

const reservaSchema = new Schema({
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    medicamento: {
        type: Schema.Types.ObjectId,
        ref: 'Medicamento'
    }

})

export default model("Reserva", reservaSchema)
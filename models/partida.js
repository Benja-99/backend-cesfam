import { model, Schema } from 'mongoose'

const partidaSchema = new Schema({
    fecha: Date,
    prescripcion: {
        type: Schema.Types.ObjectId,
        ref: 'Prescripcion'
    },
    nombreR: String
})

export default model('Partida', partidaSchema)
import { model, Schema } from 'mongoose'

const medicamentoSchema = new Schema ({
    nombre: String,
    codigo: String,
    desc: String,
    fab: String,
    tipo: String,
    comp: [String],
    contenido: String,
    gramaje: Number,
    cantidad: Number,
})

export default model('Medicamento', medicamentoSchema)
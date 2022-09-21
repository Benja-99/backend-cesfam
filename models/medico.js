import { Schema, model} from "mongoose"


const medicoSchema = new Schema({
    rut: String,
    nombre: String,
    pass: String,
    prescripciones: [{
        type: Schema.Types.ObjectId,
        ref: 'Prescripcion'
    }],
    pacientes: [{
        type: Schema.Types.ObjectId,
        ref: 'Paciente'
    }],
    cesfam: {
        type: Schema.Types.ObjectId,
        ref: 'Cesfam'
    }

})

export default model('Medico', medicoSchema)
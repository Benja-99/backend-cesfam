import { Schema, model} from "mongoose"


const pacienteSchema = new Schema({
    rut: String,
    numCarnet: Number,
    nombre: String,
    prescripciones: [{
        type: Schema.Types.ObjectId,
        ref: 'Prescripcion'
    }],
    cesfam: {
        type: Schema.Types.ObjectId,
        ref: 'Cesfam'
    },
    medico: {
        type: Schema.Types.ObjectId,
        ref: 'Medico'
    }

})

export default model("Paciente", pacienteSchema)

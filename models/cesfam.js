import { Schema, model} from "mongoose"

const cesfamSchema = new Schema({
		direccion: String,
		nombre: String,
		medicos: [{
			type: Schema.Types.ObjectId,
			ref: 'Medico'
		}],
		pacientes: [{
			type: Schema.Types.ObjectId,
			ref: 'Paciente'
		}],
		prescripciones: [{
			type: Schema.Types.ObjectId,
			ref: 'Prescripcion'
		}]
})

export default model('Cesfam', cesfamSchema)

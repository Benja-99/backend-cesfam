const { Schema, model } = require('mongoose')

const cesfamSchema = new Schema({
		direccion: String,
		nombre: String,
		medicos: [{
			type: Object,
			ref: 'Medico'
		}],
		pacientes: [{
			type: Object,
			ref: 'Paciente'
		}],
		prescripciones: [{
			type: Object,
			ref: 'Prescripcion'
		}]
})

const Cesfam = model('Cesfam', cesfamSchema)
module.exports = { Cesfam }

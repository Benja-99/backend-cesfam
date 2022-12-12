const { Cesfam } = require('./models/cesfam')
const { Medicamento } = require('./models/medicamento')
const { Medico } = require('./models/medico')
const { Paciente } = require('./models/paciente')
const { Partida } = require('./models/partida')
const { Prescripcion } = require('./models/prescripcion')
const { Receta } = require('./models/receta')
const { Reserva } = require('./models/reserva')


const resolvers = {
		Query: {
				async getCesfams(obj) {
						const cesfams = await Cesfam.find()
						return cesfams
				},
				async getCesfam(obj, { id }) {
						const cesfam = await Cesfam.findById(id)
						return cesfam
				},

				async getMedicamentos(obj) {
						const medicamentos = await Medicamento.find()
						return medicamentos
				},
				async getMedicamento(obj, { id }) {
						const medicamento = await Medicamento.findById(id)
						return medicamento
				},

				async getMedicos(obj) {
						const medicos = await Medico.find()
						return medicos
				},
				async getMedico(obj, { id }) {
						const medico = await Medico.findById(id)
						return medico
				},

				async getPacientes(obj) {
						const pacientes = await Paciente.find()
						return pacientes
				},
				async getPaciente(obj, { id }) {
						const paciente = await Paciente.findById(id)
						return paciente
				},

				async getPartidas(obj) {
						const partidas = await Partida.find()
						return partidas
				},
				async getPartida(obj, { id }) {
						const partida = await Partida.findById(id)
						return partida
				},

				async getPrescripciones(obj) {
						const prescripciones = await Prescripcion.find()
						return prescripciones
				},
				async getPrescripcion(obj, { id }) {
						const prescripcion = await Prescripcion.findById(id)
						return prescripcion
				},

				async getRecetas(obj) {
						const recetas = await Receta.find()
						return recetas
				},
				async getReceta(obj, { id }) {
						const receta = await Receta.findById(id)
						return receta
				},

				async getReservas(obj) {
						const reservas = await Reserva.find()
						return reservas
				},
				async getReserva(obj, { id }) {
						const reserva = await Reserva.findById(id)
						return reserva
				}
		},
		Mutation: {
			async addCesfam(obj, { input }) {
				const cesfam = new Cesfam(input)
				await cesfam.save()
				return cesfam
			},
			async updateCesfam(obj, {id, input}) {
				const cesfam = await Cesfam.findByIdAndUpdate(id, input)
				return cesfam
			},
			async deleteCesfam(obj, { id }) {
				await Cesfam.deleteOne({_id: id})
				return {
						message: 'Cesfam eliminado'
				}
			},

			async addMedicamento(obj, { input }) {
				const medicamento = new Medicamento(input)
				await medicamento.save()
				return medicamento
			},
			async updateMedicamento(obj, {id, input}) {
				const medicamento = await Medicamento.findByIdAndUpdate(id, input)
				return medicamento
			},
			async deleteMedicamento(obj, { id }) {
				await Medicamento.deleteOne({_id: id})
				return {
						message: 'Medicamento eliminado'
				}
			},

			async addMedico(obj, { input }) {
				const medico = new Medico(input)
				await medico.save()
				return medico
			},
			async updateMedico(obj, {id, input}) {
				const medico = await Medico.findByIdAndUpdate(id, input)
				return medico
			},
			async deleteMedico(obj, { id }) {
				await Medico.deleteOne({_id: id})
				return {
						message: 'Medico eliminado'
				}
			},

			async addPaciente(obj, { input }) {
				const paciente = new Paciente(input)
				await paciente.save()
				return paciente
			},
			async updatePaciente(obj, {id, input}) {
				const paciente = await Paciente.findByIdAndUpdate(id, input)
				return paciente
			},
			async deletePaciente(obj, { id }) {
				await Paciente.deleteOne({_id: id})
				return {
						message: 'Paciente eliminado'
				}
			},

			async addPartida(obj, { input }) {
				const partida = new Partida(input)
				await partida.save()
				return partida
			},
			async updatePartida(obj, {id, input}) {
				const partida = await Partida.findByIdAndUpdate(id, input)
				return partida
			},
			async deletePartida(obj, { id }) {
				await Partida.deleteOne({_id: id})
				return {
						message: 'Partida eliminado'
				}
			},

			async addPrescripcion(obj, { input }) {
				const prescripcion = new Prescripcion(input)
				await prescripcion.save()
				return prescripcion
			},
			async updatePrescripcion(obj, {id, input}) {
				const prescripcion = await Prescripcion.findByIdAndUpdate(id, input)
				return prescripcion
			},
			async deletePrescripcion(obj, { id }) {
				await Prescripcion.deleteOne({_id: id})
				return {
						message: 'Prescripcion eliminado'
				}
			},

			async addReceta(obj, { input }) {
				const receta = new Receta(input)
				await receta.save()
				return receta
			},
			async updateReceta(obj, {id, input}) {
				const receta = await Receta.findByIdAndUpdate(id, input)
				return receta
			},
			async deleteReceta(obj, { id }) {
				await Receta.deleteOne({_id: id})
				return {
						message: 'Receta eliminado'
				}
			},

			async addReserva(obj, { input }) {
				const reserva = new Reserva(input)
				await reserva.save()
				return reserva
			},
			async updateReserva(obj, {id, input}) {
				const reserva = await Reserva.findByIdAndUpdate(id, input)
				return reserva
			},
			async deleteReserva(obj, { id }) {
				await Reserva.deleteOne({_id: id})
				return {
						message: 'Reserva eliminado'
				}
			}
		}
}

module.exports = { resolvers }
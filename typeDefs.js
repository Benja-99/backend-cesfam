import { gql } from 'apollo-server-express'

const typeDefs = gql`
	type Cesfam {
		id: ID!
		direccion: String!
		nombre: String!
		medicos: [Medico]!
		pacientes: [Paciente]!
		prescripciones: [Prescripcion]!
	}

	type Medicamento {
		id: ID!
		nombre: String!
		codigo: String!
		desc: String!
		fab: String!
		tipo: String!
		comp: [String]!
		contenido: String!
		gramaje: Number
		cantidad: Number
	}

	type Medico {
		rut: String!
		nombre: String!
		pass: String!
		prescripciones: [Prescripcion]!
		pacientes: [Paciente]!
		cesfam: Cesfam!
	}

	type Paciente {
		rut: String!
		numCarnet: Number!
		nombre: String!
		prescripciones: [Prescripcion]!
		cesfam: Cesfam!
		medico: Medico!
	}

	type Partida {
		fecha: Date!
		prescripcion: [Prescripcion]!
		nombreR: String!
	}
	
	type Prescripcion {
		fecha: Date!
		cesfam: Cesfam!
		medico: Medico!
		paciente: Paciente!
		medicamentos: [Medicamento]!
	}

	type Receta {
		paciente: Paciente!
		medico: Medico!
		medicamentos: [Medicamento]!
	}

	type Reserva {
		paciente: Paciente!
		medicamento: Medicamento!
	}

	input CesfamInput {
		id: ID!
		direccion: String!
		nombre: String!
		medicos: [Medico]!
		pacientes: [Paciente]!
		prescripciones: [Prescripcion]!
	}

	input MedicamentoInput {
		id: ID!
		nombre: String!
		codigo: String!
		desc: String!
		fab: String!
		tipo: String!
		comp: [String]!
		contenido: String!
		gramaje: Number
		cantidad: Number
	}

	input MedicoInput {
		rut: String!
		nombre: String!
		pass: String!
		prescripciones: [Prescripcion]!
		pacientes: [Paciente]!
		cesfam: Cesfam!
	}

	input PacienteInput {
		rut: String!
		numCarnet: Number!
		nombre: String!
		prescripciones: [Prescripcion]!
		cesfam: Cesfam!
		medico: Medico!
	}

	input PartidaInput {
		fecha: Date!
		prescripcion: [Prescripcion]!
		nombreR: String!
	}
	
	input PrescripcionInput {
		fecha: Date!
		cesfam: Cesfam!
		medico: Medico!
		paciente: Paciente!
		medicamentos: [Medicamento]!
	}

	input RecetaInput {
		paciente: Paciente!
		medico: Medico!
		medicamentos: [Medicamento]!
	}

	input ReservaInput {
		paciente: Paciente!
		medicamento: Medicamento!
	}

	type Alert {
			message: String
	}


	type Query {
			getCesfams: [Cesfam]
			getCesfam(id: ID!) : Cesfam

			getMedicamentos: [Medicamento]
			getMedicamento(id: ID!) : Medicamento

			getMedicos: [Medico]
			getMedico(id: ID!) : Medico

			getPacientes: [Paciente]
			getPaciente(id: ID!) : Paciente

			getPartidas: [Partida]
			getPartida(id: ID!) : Partida

			getPrescripcions: [Prescripcion]
			getPrescripcion(id: ID!) : Prescripcion

			getRecetas: [Receta]
			getReceta(id: ID!) : Receta

			getReservas: [Reserva]
			getReserva(id: ID!) : Reserva
	}

	type Mutation {
			addCesfam(input: CesfamInput): Cesfam
			updateCesfam(id: ID!, input: CesfamInput): Cesfam
			deleteCesfam(id: ID!): Alert

			addMedicamento(input: MedicamentoInput): Medicamento
			updateMedicamento(id: ID!, input: MedicamentoInput): Medicamento
			deleteMedicamento(id: ID!): Alert

			addMedico(input: MedicoInput): Medico
			updateMedico(id: ID!, input: MedicoInput): Medico
			deleteMedico(id: ID!): Alert

			addPaciente(input: PacienteInput): Paciente
			updatePaciente(id: ID!, input: PacienteInput): Paciente
			deletePaciente(id: ID!): Alert

			addPartida(input: PartidaInput): Partida
			updatePartida(id: ID!, input: PartidaInput): Partida
			deletePartida(id: ID!): Alert

			addPrescripcion(input: PrescripcionInput): Prescripcion
			updatePrescripcion(id: ID!, input: PrescripcionInput): Prescripcion
			deletePrescripcion(id: ID!): Alert

			addReceta(input: RecetaInput): Receta
			updateReceta(id: ID!, input: RecetaInput): Receta
			deleteReceta(id: ID!): Alert

			addReserva(input: ReservaInput): Reserva
			updateReserva(id: ID!, input: ReservaInput): Reserva
			deleteReserva(id: ID!): Alert
	}
`;

export default typeDefs
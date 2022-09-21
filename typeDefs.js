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
		gramaje: Int
		cantidad: Int
	}

	type Medico {
		id: ID!
		rut: String!
		nombre: String!
		pass: String!
		prescripciones: [Prescripcion]!
		pacientes: [Paciente]!
		cesfam: Cesfam!
	}

	type Paciente {
		id: ID!
		rut: String!
		numCarnet: Int!
		nombre: String!
		prescripciones: [Prescripcion]!
		cesfam: Cesfam!
		medico: Medico!
	}

	type Partida {
		id: ID!
		fecha: String!
		prescripcion: [Prescripcion]!
		nombreR: String!
	}
	
	type Prescripcion {
		id: ID!
		fecha: String!
		cesfam: Cesfam!
		medico: Medico!
		paciente: Paciente!
		medicamentos: [Medicamento]!
	}

	type Receta {
		id: ID!
		paciente: Paciente!
		medico: Medico!
		medicamentos: [Medicamento]!
	}

	type Reserva {
		id: ID!
		paciente: Paciente!
		medicamento: Medicamento!
	}

	input CesfamInput {
		id: ID!
		direccion: String!
		nombre: String!
		medicos: [MedicoInput]!
		pacientes: [PacienteInput]!
		prescripciones: [PrescripcionInput]!
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
		gramaje: Int
		cantidad: Int
	}

	input MedicoInput {
		id: ID!
		rut: String!
		nombre: String!
		pass: String!
		prescripciones: [PrescripcionInput]!
		pacientes: [PacienteInput]!
		cesfam: CesfamInput!
	}

	input PacienteInput {
		id: ID!
		rut: String!
		numCarnet: Int!
		nombre: String!
		prescripciones: [PrescripcionInput]!
		cesfam: CesfamInput!
		medico: MedicoInput!
	}

	input PartidaInput {
		id: ID!
		fecha: String!
		prescripcion: [PrescripcionInput]!
		nombreR: String!
	}
	
	input PrescripcionInput {
		id: ID!
		fecha: String!
		cesfam: CesfamInput!
		medico: MedicoInput!
		paciente: PacienteInput!
		medicamentos: [MedicamentoInput]!
	}

	input RecetaInput {
		id: ID!
		paciente: PacienteInput!
		medico: MedicoInput!
		medicamentos: [MedicamentoInput]!
	}

	input ReservaInput {
		id: ID!
		paciente: PacienteInput!
		medicamento: MedicamentoInput!
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

		getPrescripciones: [Prescripcion]
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
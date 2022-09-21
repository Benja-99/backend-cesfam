import Cesfam from "./models/cesfam.js"


const resolvers = {}
//     Query: {
//         async getUsuarios(obj) {
//             const usuarios = await Usuario.find()
//             return usuarios
//         },

//         async getUsuario(obj, { id }) {
//             const usuario = await Usuario.findById(id)
//             return usuario
//         }
//     },
//     Mutation: {
//         async addUsuario(obj, { input }) {
//             const usuario = new Usuario(input)
//             await usuario.save()
//             return usuario
//         },
//         async updateUsuario(obj, {id, input}) {
//             const usuario = await Usuario.findByIdAndUpdate(id, input)
//             return usuario
//         },
//         async deleteUsuario(obj, { id }) {
//             await Usuario.deleteOne({_id: id})
//             return {
//                 message: 'Usuario eliminado'
//             }
//         }
//     }
// }

export default resolvers
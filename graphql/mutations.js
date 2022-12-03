const { GraphQLString, } = require('graphql');
const { VeterinariaType, UsuarioType } = require("./customTypes");
const { createUsuario, compareCorreo } = require('../db/dbCalls')
const { createJWTToken } = require('../util/auth');
const { compareClave } = require('../util/bycrypt');

const register = {
    type: GraphQLString,
    description: "Registra un usuario y retorna un token",
    args: UsuarioType.getFields(),
    resolve: async (parent, args) => {

        const usuario = await createUsuario(
            args.correo,
            args.clave,
            args.nombres,
            args.apellidos,
            args.numero_celular,
            args.id_pais,
            2,
            args.direccion,
            new Date(),
            args.es_activa,
        )

        return createJWTToken(usuario);


    }
}


const login = {
    // type: graphqlstring determina que la funcion devolvera un string
    type: GraphQLString,
    args: {
        correo: { type: GraphQLString },
        clave: { type: GraphQLString }
    },
    async resolve(parent, args) {

        console.log(args);

        try {
            const usuario = await compareCorreo(args.correo)

            let isClaveCorrect = true

            if (usuario) {
                isClaveCorrect = await compareClave(args.clave, usuario.clave)
            }

            if (!usuario || !isClaveCorrect) throw new Error("credenciales incorrectas!")
            delete usuario['clave']

            const token = createJWTToken(usuario)
            return token

        } catch (error) {
            return error
        }



    }
}

module.exports = {
    register,
    login
}

// const RootMutationType = new GraphQLObjectType({
//     name: 'Mutation',
//     description: 'Root Mutation',
//     fields: () => ({
//         register: {
//             type: UsuarioType,
//             description: 'Registrar usuario',
//             args: UsuarioType.getFields(),
//             resolve: async (parent, args) => {

            //     return await createUsuario(
            //         args.id_usuario,
            //         args.correo,
            //         args.clave,
            //         args.nombres,
            //         args.apellidos,
            //         args.numero_celular,
            //         args.id_pais,
            //         args.id_rol,
            //         args.direccion,
            //         args.token_comprobacion,
            //         args.activa_cuenta,
            //         args.fecha_creacion,
            //         args.es_activa,
            //         args.token_sesion
            //     )
            // }
//         },
//         login: {
//             type: VeterinariaType,
//             description: 'Add veterinaria to DB',
//             args: VeterinariaType.getFields(),
//             resolve: (parent, args) => {

//                 return "Query para añadir veterinaria"
//             }
//         }
//     })
// })

// exports.RootMutationType = RootMutationType
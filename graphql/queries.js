const { UsuarioType } = require('./customTypes');
const { getUsuario, getUsuarios } = require('../db/dbCalls');
const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql')

const usuario = {
    type: UsuarioType,
    description: "obtener un usuario",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getUsuario(id) }
}

const usuarios = {
    type: new GraphQLList(UsuarioType),
    description: "obtener una lista de usuarios",
    resolve: () => { return getUsuarios() }
}

module.exports = { usuario, usuarios }


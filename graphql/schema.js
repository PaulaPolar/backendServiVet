const { GraphQLSchema, GraphQLObjectType, GraphQLBoolean } = require('graphql')

// Queries
const {
    usuario,
    usuarios,
    veterinaria,
    veterinarias,
    estado_cita,
    estado_citas,
    cita,
    citas,
    pais,
    paises,
    rol,
    roles,
    espacio_calendario,
    espacios_calendarios,
    // imagen_carrusel_veterinaria,
    // imagenes_carrusel_veterinarias,
    servicio_veterinaria,
    servicios_veterinarias,
    producto,
    productos,
    imagen,
    imagenes
} = require("./queries");

// Mutations
const {
    register,
    login,
} = require("./mutations");

// Define QueryType
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: {
        usuario,
        usuarios,
        veterinaria,
        veterinarias,
        estado_cita,
        estado_citas,
        cita,
        citas,
        pais,
        paises,
        rol,
        roles,
        espacio_calendario,
        espacios_calendarios,
        // imagen_carrusel_veterinaria,
        // imagenes_carrusel_veterinarias,
        servicio_veterinaria,
        servicios_veterinarias,
        producto,
        productos,
        imagen,
        imagenes
    },
});

const defaultMutation = {
    type: GraphQLBoolean,
    description: "default mutation",
    resolve: () => { return true }
}

// Define MutationType
const MutationType = new GraphQLObjectType({
    name: "MutationType",
    description: "Mutations",
    fields: {
        defaultMutation,
    },
});

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});


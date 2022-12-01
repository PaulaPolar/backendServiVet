const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql')


const USUARIO_FIELDS = {
    id_usuario: { type: GraphQLInt },
    correo: { type: GraphQLString },
    clave: { type: GraphQLString },
    nombres: { type: GraphQLString },
    apellidos: { type: GraphQLString },
    numero_celular: { type: GraphQLString },
    id_pais: { type: GraphQLInt },
    id_rol: { type: GraphQLInt },
    direccion: { type: GraphQLString },
    token_comprobacion: { type: GraphQLString },
    activa_cuenta: { type: GraphQLBoolean },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean },
    token_sesion: { type: GraphQLString },
}

const UsuarioType = new GraphQLObjectType({
    name: 'Usuario',
    description: 'This represents a user entity',
    fields: () => (
        USUARIO_FIELDS
    )
})

const VETERINARIA_FIELDS = {
    id_veterinaria: { type: new GraphQLNonNull(GraphQLInt) },
    nombre_vet: { type: GraphQLString },
    logo_id_imagen: { type: GraphQLInt },
    sigla_vet: { type: GraphQLString },
    direccion_vet: { type: GraphQLString },
    color: { type: GraphQLString },
    link_acceso: { type: GraphQLString },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLString },
}

const VeterinariaType = new GraphQLObjectType({
    name: 'Veterinaria',
    description: 'This represents a Veterinaria entity',
    fields: () => (
        VETERINARIA_FIELDS
    )
})

module.exports = {
    UsuarioType,
    VeterinariaType
}

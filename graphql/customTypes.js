const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql')


const USUARIO_FIELDS = {
    id_usuario: { type: GraphQLInt },
    id_veterinaria: { type: GraphQLInt },
    correo: { type: GraphQLString },
    clave: { type: GraphQLString },
    nombres: { type: GraphQLString },
    apellidos: { type: GraphQLString },
    numero_celular: { type: GraphQLString },
    id_pais: { type: GraphQLInt },
    id_rol: { type: GraphQLInt },
    direccion: { type: GraphQLString },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean },
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
    mision: { type: GraphQLString },
    vision: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean },
}

const VeterinariaType = new GraphQLObjectType({
    name: 'Veterinaria',
    description: 'This represents a Veterinaria entity',
    fields: () => (
        VETERINARIA_FIELDS
    )
})

const ESTADO_CITA_FIELDS = {
    id_estado_cita: { type: new GraphQLNonNull(GraphQLInt) },
    nombre_estado: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean }
}

const EstadoCitaType = new GraphQLObjectType({
    name: 'estado_cita',
    description: 'This represents a Estado Cita entity',
    fields: () => (
        ESTADO_CITA_FIELDS
    )
})

const CITA_FIELDS = {
    id_cita: { type: new GraphQLNonNull(GraphQLInt) },
    id_espacio: { type: GraphQLInt },
    id_estado: { type: GraphQLInt },
    descripcion: { type: GraphQLString },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean }
}

const CitaType = new GraphQLObjectType({
    name: 'cita',
    description: 'This represents a Cita entity',
    fields: () => (
        CITA_FIELDS
    )
})

const PAIS_FIELDS = {
    id_pais: { type: new GraphQLNonNull(GraphQLInt) },
    indicativo: { type: GraphQLString },
    nombre_pais: { type: GraphQLInt },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean }
}

const PaisType = new GraphQLObjectType({
    name: 'pais',
    description: 'This represents a pais entity',
    fields: () => (
        PAIS_FIELDS
    )
})

const ROL_FIELDS = {
    id_rol: { type: new GraphQLNonNull(GraphQLInt) },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean }
}

const RolType = new GraphQLObjectType({
    name: 'rol',
    description: 'This represents a rol entity',
    fields: () => (
        ROL_FIELDS
    )
})

const ESPACIO_CALENDARIO_FIELDS = {
    id_rol: { type: new GraphQLNonNull(GraphQLInt) },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean }
}

const EspacioCalendarioType = new GraphQLObjectType({
    name: 'espacioCalendario',
    description: 'This represents a Espacio Calendario entity',
    fields: () => (
        ESPACIO_CALENDARIO_FIELDS
    )
})

const IMAGEN_CARRUSEL_VETERINARIA_FIELDS = {
    id_img_carrusel: { type: new GraphQLNonNull(GraphQLInt) },
    id_veterinaria: { type: GraphQLString },
    id_imagen: { type: GraphQLString },
}

const ImagenCarruselVeterinariaType = new GraphQLObjectType({
    name: 'imagenCarruselVeterinaria',
    description: 'This represents a Imagen Carrusel Veterinaria entity',
    fields: () => (
        IMAGEN_CARRUSEL_VETERINARIA_FIELDS
    )
})

const SERVICIO_VETERINARIA_FIELDS = {
    id_img_carrusel: { type: new GraphQLNonNull(GraphQLInt) },
    id_veterinaria: { type: GraphQLString },
    id_imagen: { type: GraphQLString },
}

const ServicioVeterinariaType = new GraphQLObjectType({
    name: 'servicioVeterinaria',
    description: 'This represents a servicio veterinaria entity',
    fields: () => (
        SERVICIO_VETERINARIA_FIELDS
    )
})

const PRODUCTO_FIELDS = {
    id_producto: { type: new GraphQLNonNull(GraphQLInt) },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    peso: { type: GraphQLString },
    edad: { type: GraphQLString },
    precio: { type: GraphQLString },
    marca: { type: GraphQLString },
    id_veterinaria: { type: GraphQLInt },
    id_imagen: { type: GraphQLInt },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean }
}

const ProductoType = new GraphQLObjectType({
    name: 'producto',
    description: 'This represents a producto entity',
    fields: () => (
        PRODUCTO_FIELDS
    )
})


const IMAGEN_FIELDS = {
    id_producto: { type: new GraphQLNonNull(GraphQLInt) },
    nombre: { type: GraphQLString },
    descripcion: { type: GraphQLString },
    peso: { type: GraphQLInt },
    edad: { type: GraphQLInt },
    precio: { type: GraphQLInt },
    marca: { type: GraphQLString },
    id_veterinaria: { type: GraphQLInt },
    id_imagen: { type: GraphQLInt },
    fecha_creacion: { type: GraphQLString },
    es_activa: { type: GraphQLBoolean }
}

const ImagenType = new GraphQLObjectType({
    name: 'imagen',
    description: 'This represents a imagen entity',
    fields: () => (
        IMAGEN_FIELDS
    )
})



module.exports = {
    UsuarioType,
    VeterinariaType,
    EstadoCitaType,
    CitaType,
    PaisType,
    RolType,
    EspacioCalendarioType,
    ImagenCarruselVeterinariaType,
    ServicioVeterinariaType,
    ProductoType,
    ImagenType
}

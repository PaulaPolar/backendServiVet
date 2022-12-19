const {
    UsuarioType,
    VeterinariaType,
    EstadoCitaType,
    CitaType,
    PaisType,
    RolType,
    EspacioCalendarioType,
    ServicioVeterinariaType,
    ProductoType,
    ImagenType
} = require('./customTypes');

const {
    getCita,
    getCitas,
    getEspacioCalendario,
    getEspacioCalendarios,
    getEstadoCita,
    getEstadoCitas,
    getImagen,
    getImagenes,
    getPais,
    getPaises,
    getProducto,
    getProductos,
    getRol,
    getRoles,
    getServicioVeterinaria,
    getServiciosVeterinarias,
    getVeterinaria,
    getVeterinarias,
    getUsuario,
    getUsuarios,
    getUsuariosSegunRol,
} = require('../db/dbCalls');
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

const usuariosSegunRol = {
    type: new GraphQLList(UsuarioType),
    description: "obtener una lista de usuarios segun rol",
    args: {
        idRol: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { idRol }) => { return getUsuariosSegunRol(idRol) }
}

const veterinaria = {
    type: VeterinariaType,
    description: "obtener una veterinaria",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getVeterinaria(id) }
}

const veterinarias = {
    type: new GraphQLList(VeterinariaType),
    description: "obtener una lista de veterinarias",
    resolve: () => { return getVeterinarias() }
}

const estado_cita = {
    type: EstadoCitaType,
    description: "obtener un estado cita",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getEstadoCita(id) }
}

const estado_citas = {
    type: new GraphQLList(EstadoCitaType),
    description: "obtener una lista de estado citas",
    resolve: () => { return getEstadoCitas() }
}

const cita = {
    type: CitaType,
    description: "obtener una cita",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getCita(id) }
}

const citas = {
    type: new GraphQLList(CitaType),
    description: "obtener una lista de citas",
    resolve: () => { return getCitas() }
}

const pais = {
    type: PaisType,
    description: "obtener un pais",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getPais(id) }
}

const paises = {
    type: new GraphQLList(PaisType),
    description: "obtener una lista de paises",
    resolve: () => { return getPaises() }
}

const rol = {
    type: RolType,
    description: "obtener un rol",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getRol(id) }
}

const roles = {
    type: new GraphQLList(RolType),
    description: "obtener una lista de roles",
    resolve: () => { return getRoles() }
}

const espacio_calendario = {
    type: EspacioCalendarioType,
    description: "obtener un espacio calendario",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getEspacioCalendario(id) }
}

const espacios_calendarios = {
    type: new GraphQLList(EspacioCalendarioType),
    description: "obtener una lista de espacios calendarios",
    resolve: () => { return getEspacioCalendarios() }
}

// const imagen_carrusel_veterinaria = {
//     type: ImagenCarruselVeterinariaType,
//     description: "obtener una imagen carrusel veterinaria",
//     args: {
//         id: { type: new GraphQLNonNull(GraphQLID) }
//     },
//     resolve: (parent, { id }) => { return getImagenCarruselVeterinaria(id) }
// }

// const imagenes_carrusel_veterinarias = {
//     type: new GraphQLList(ImagenCarruselVeterinariaType),
//     description: "obtener una lista de imagenes carrusel veterinarias",
//     resolve: () => { return getImagenesCarruselVeterinarias() }
// }

const servicio_veterinaria = {
    type: ServicioVeterinariaType,
    description: "obtener un servicio veterinaria",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getServicioVeterinaria(id) }
}

const servicios_veterinarias = {
    type: new GraphQLList(ServicioVeterinariaType),
    description: "obtener una lista de servicios veterinarias",
    resolve: () => { return getServiciosVeterinarias() }
}

const producto = {
    type: ProductoType,
    description: "obtener un producto",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getProducto(id) }
}

const productos = {
    type: new GraphQLList(ProductoType),
    description: "obtener una lista de productos",
    resolve: () => { return getProductos() }
}

const imagen = {
    type: ImagenType,
    description: "obtener una imagen",
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent, { id }) => { return getImagen(id) }
}

const imagenes = {
    type: new GraphQLList(ImagenType),
    description: "obtener una lista de imagenes",
    resolve: () => { return getImagenes() }
}



module.exports = {
    usuario,
    usuarios,
    usuariosSegunRol,
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
}


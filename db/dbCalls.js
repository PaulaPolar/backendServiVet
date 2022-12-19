require("dotenv").config()
const pgp = require('pg-promise')(/* options */)
const db = pgp(`postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@ep-rapid-hill-715294.cloud.neon.tech/servivet?sslmode=require`)
const { encryptClave } = require('../util/bycrypt')

// USUARIO

const getUsuario = async (id) => {

    data = await db.one(`SELECT * FROM public.usuario WHERE id_usuario = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getUsuariosSegunRol = async (idRol) => {

    data = await db.one(`SELECT * FROM public.usuario WHERE id_rol = ${idRol}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const compareCorreo = async (correo) => {

    data = await db.one(`SELECT * FROM public.usuario WHERE correo = $1`, [correo])
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}




const getUsuarios = async () => {

    data = await db.query(`SELECT * FROM public.usuario`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getVeterinaria = async (id) => {

    data = await db.one(`SELECT * FROM public.veterinaria WHERE id_veterinaria = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getVeterinarias = async () => {

    data = await db.query(`SELECT * FROM public.veterinaria`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

// create all the calls to the database in here
// remember to finish the fronent shit that fucking paula is mogglin about

const getEstadoCita = async (id) => {

    data = await db.one(`SELECT * FROM public.estado_cita WHERE id_estado_cita = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getEstadoCitas = async () => {

    data = await db.query(`SELECT * FROM public.estado_cita`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getCita = async (id) => {

    data = await db.one(`SELECT * FROM public.cita WHERE id_cita = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getCitas = async () => {

    data = await db.query(`SELECT * FROM public.cita`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getPais = async (id) => {

    data = await db.one(`SELECT * FROM public.pais WHERE id_pais = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getPaises = async () => {

    data = await db.query(`SELECT * FROM public.pais`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getRol = async (id) => {

    data = await db.one(`SELECT * FROM public.rol WHERE id_rol = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getRoles = async () => {

    data = await db.query(`SELECT * FROM public.rol`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getEspacioCalendario = async (id) => {

    data = await db.one(`SELECT * FROM public.espacio_calendario WHERE id_espacio_calendario = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getEspacioCalendarios = async () => {

    data = await db.query(`SELECT * FROM public.espacio_calendario`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

// const getImagenCarruselVeterinaria = async (id) => {

//     data = await db.one(`SELECT * FROM public.espacio_calendario WHERE id_espacio_calendario = ${id}`)
//         .then((data) => {
//             //console.log('DATA:', data)
//             return data
//         })
//         .catch((error) => {
//             console.log('ERROR:', error)
//         })
//     return data;
// }

// const getImagenesCarruselVeterinarias = async () => {

//     data = await db.query(`SELECT * FROM public.espacio_calendario`)
//         .then((data) => {
//             //console.log('DATA:', data)
//             return data
//         })
//         .catch((error) => {
//             console.log('ERROR:', error)
//         })
//     return data;
// }

const getServicioVeterinaria = async (id) => {

    data = await db.one(`SELECT * FROM public.servicio_veterinaria WHERE id_servicio_veterinaria = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getServiciosVeterinarias = async () => {

    data = await db.query(`SELECT * FROM public.servicio_veterinaria`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getProducto = async (id) => {

    data = await db.one(`SELECT * FROM public.producto WHERE id_producto = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getProductos = async () => {

    data = await db.query(`SELECT * FROM public.producto`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getImagen = async (id) => {

    data = await db.one(`SELECT * FROM public.imagen WHERE id_imagen = ${id}`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}

const getImagenes = async () => {

    data = await db.query(`SELECT * FROM public.imagen`)
        .then((data) => {
            //console.log('DATA:', data)
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;
}




const createUsuario = async (
    correo,
    clave,
    nombres,
    apellidos,
    numero_celular,
    id_pais,
    id_rol,
    direccion,
    token_comprobacion,
    activa_cuenta,
    fecha_creacion,
    es_activa,
    token_sesion
) => {

    data = await db.one(`
    INSERT INTO "usuario" ("correo", "clave", "nombres", "apellidos",
    "numero_celular", "id_pais", "id_rol", "direccion", 
    "fecha_creacion", "es_activa")  
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
    RETURNING
    id_usuario,
    correo,
    nombres,
    apellidos,
    numero_celular,
    id_pais,
    id_rol,
    direccion,
    fecha_creacion;
    `, [
        correo,
        await encryptClave(clave),
        nombres,
        apellidos,
        numero_celular,
        id_pais,
        id_rol,
        direccion,
        token_comprobacion,
        activa_cuenta,
        fecha_creacion,
        es_activa,
        token_sesion])
        .then((data) => {
            console.log(data);
            console.log("datos insertados con exito!")
            return data
        })
        .catch((error) => {
            console.log('ERROR:', error)
        })
    return data;

}


module.exports = {
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
    createUsuario,
    compareCorreo,
    getUsuariosSegunRol
}
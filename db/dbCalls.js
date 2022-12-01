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


const createUsuario = async (
    id_usuario,
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
    "numero_celular", "id_pais", "id_rol", "direccion", "token_comprobacion", "activa_cuenta", 
    "fecha_creacion", "es_activa", "token_sesion")  
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
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

// VETERINARIA

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

module.exports = {
    getUsuario,
    getUsuarios,
    createUsuario,
    getVeterinaria,
    compareCorreo
}
import Role from '../models/role.js'
import  Model  from '../database/usuariosDB.js';


export const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol })
    if ( !existeRol) {
            throw new Error(`El rol ${ rol } no esta registrado en la DB`)
    }
}


export const emailExiste = async(correo = '') => {
     const existeEmail = await Model.findOne ({ correo })
        if (existeEmail) {
            throw new Error(`El correo ${correo} ya esta registrado`)

}


}

export const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Model.findById ( id )
       if (!existeUsuario) {
           throw new Error(`El no existe ${id}`)

}
}
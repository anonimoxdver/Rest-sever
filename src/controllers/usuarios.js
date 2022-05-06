import { response, request } from 'express'
import bcryptjs from 'bcryptjs'

import  Model  from '../database/usuariosDB.js';




export const usuariosGet = async(req  = request  , res = response) => {

    //const {q, nombre = 'no name', apikey, page, limit} = req.query;
    const { limite = 5, desde = 0 } = req.query;
    const query = {estado: true};


    const [total, usuarios] = await Promise.all([
        Model.countDocuments(query),
        Model.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])
    res.json({ 
        total,
        usuarios   
    });
} 



export const usuariosPut = async(req  = request, res) => {
    const {id} = req.params;
    const { _id ,password, google, correo, ...resto} = req.body;

    if ( password ) {      
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Model.findByIdAndUpdate(id , resto)

    res.status(400).json( usuario );
}




export const usuariosPost = async(req  = request, res = response) => {


    const { nombre, correo, password, rol} = req.body;
    const usuario = new Model( { nombre, correo, password, rol} );



    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)
    

    // Guardar en DB
    await usuario.save()
    res.json({       
        msg: 'post API - controlador post',
        usuario
    });
}



export const usuariosDelete = async(req  = request, res = response) => {

    const { id } = req.params
    // const usuario = await Model.findByIdAndDelete( id );
    const usuario = await Model.findByIdAndUpdate(id, {estado: false} );

    res.json( usuario );
}



export const usuariosPatch = (req, res) => {
    res.status(403).json({       
    msg: 'patch API - controlador'
    });
}


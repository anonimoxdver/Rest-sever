import { response, request } from 'express'



export const usuariosGet = (req  = request  , res = response) => {

    const {q, nombre = 'no name', apikey, page, limit} = req.query;
    res.status(403).json({       
        msg: 'get API - controlador',
         q,
         nombre, 
         apikey,
         page,
         limit
    });
} 



export const usuariosPut = (req  = request, res) => {
    const {id} = req.params;

    res.status(400).json({       
    msg: 'put API - controlador',
    id
    });
}




export const usuariosPost = (req  = request, res = response) => {

    const {nombre, edad} = req.body;

    res.json({       
        msg: 'post API - controlador post',
       nombre,
       edad
    });
}



export const usuariosDelete = (req, res) => {
    res.status(403).json({       
    msg: 'delete API - controlador'
    });
}



export const usuariosPatch = (req, res) => {
    res.status(403).json({       
    msg: 'patch API - controlador'
    });
}


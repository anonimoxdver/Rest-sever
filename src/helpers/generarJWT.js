import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

export const generarJWT = ( uid = '' ) => {

    return new Promise((resolve, reject) => {
        
        const payload = { uid };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {


            if ( err ) {
                console.log(err)
                reject('No se pudo obtener el token')
            } else {
                resolve(token)
            }
        })
        



    }) 
}
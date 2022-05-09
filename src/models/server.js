import express from 'express';
import cors from 'cors'
import { router } from '../routes/User.js';
import { router as routerAuth } from '../routes/auth.js';
import {dbConnection} from '../database/config.js'
const app = express();

const PORT = 8080;

const userPath = '/api/usuarios';
const authPath = '/api/auth';


export const ServerApp = async() => {

    //Cors
    app.use(cors())

    app.use( express.json() );
    //HTML 
    app.use(express.static('public'))

    //Routes
    app.use(userPath, (router))
    app.use(authPath, (routerAuth))
    
    //Mongo coneccion
    await dbConnection();

    app.listen(PORT, () => {
        console.log(`servidor corriendo en puerto ${PORT} `)
    })
}




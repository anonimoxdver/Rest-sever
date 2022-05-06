import express from 'express';
import cors from 'cors'
import { router } from '../routes/User.js';
import {dbConnection} from '../database/config.js'
const app = express();

const PORT = 8080;

const userPath = '/api/usuarios'


export const ServerApp = async() => {

    
    app.use(cors())
    app.use( express.json() );
    app.use(express.static('public'))

    app.use(userPath, (router))
    
    await dbConnection();

    app.listen(PORT, () => {
        console.log(`servidor corriendo en puerto ${PORT} `)
    })
}




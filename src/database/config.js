import mongoose from 'mongoose'
import 'dotenv/config.js'

export const dbConnection = async() => {
    try {

        await mongoose.connect( process.env.MONGODB_ATLAS ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

            
        console.log('Base de datos online')


    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

import mongoose from 'mongoose'

const { Schema, model} =mongoose

const RoleSchema = Schema({
    rol: {
        type:  String,
        required: [true, 'El rol es obligatorio']
    }
})



export default model('Role', RoleSchema)





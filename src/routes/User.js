import { Router} from 'express'
import { check } from 'express-validator';
import {usuariosDelete,
        usuariosGet, 
        usuariosPatch , 
        usuariosPost, 
        usuariosPut } from '../controllers/usuarios.js';
import { esRoleValido , emailExiste, existeUsuarioPorId} from '../helpers/db-validators.js';
import { validarCampos } from '../middlewares/validar-campos.js';

export const router = Router();

router.get('/', usuariosGet)

router.put('/:id', [
        check('id', 'No es ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        check('rol').custom( esRoleValido ),
        validarCampos
], usuariosPut)

router.post('/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').isLength({ min: 6}),
        check('correo', 'El correo no es valido').isEmail(),
        //check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
        check('rol').custom( esRoleValido ),
        check('correo').custom( emailExiste ),
        
        validarCampos
],usuariosPost)

router.delete('/:id', [
        check('id', 'No es ID valido').isMongoId(),
        check('id').custom(existeUsuarioPorId),
        validarCampos
],usuariosDelete)

router.patch('/', usuariosPatch)




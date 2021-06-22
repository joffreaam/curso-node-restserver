const { Router} = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelete } = require('../controllers/usuarios.controlles');

const router = Router();

router.get('/', usuariosGet );
router.post('/', usuariosPost );
router.put('/:id', usuariosPut );
router.delete('/', usuariosDelete );


module.exports = router;


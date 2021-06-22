const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { pagina = 5, limite=10 } = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        pagina,
        limite
    })
}

const usuariosPost = (req, res = response) => {
    
    const body = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        body
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
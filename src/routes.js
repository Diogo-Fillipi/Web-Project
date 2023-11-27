const express = require('express');
const router = express.Router();

const cadastroController = require('./controllers/cadastroController');

router.get('/cadastros', cadastroController.buscarTodos);
router.get('/cadastro/:nome', cadastroController.buscarUm);
router.post('/cadastro', cadastroController.inserir);
router.put('/cadastro/:nome', cadastroController.alterar);
router.delete('/cadastro/:nome', cadastroController.delete);

module.exports = router;
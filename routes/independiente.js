const { Router } = require('express');
const router = Router();
const { getIndependienteNews } = require('../controllers/independienteController.js');

router.route('/')
    .get(getIndependienteNews)

module.exports = router
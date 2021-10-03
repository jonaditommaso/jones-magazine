const { Router } = require('express');
const router = Router();
const { getBocaNews } = require('../controllers/bocaController.js');

router.route('/')
    .get(getBocaNews)

module.exports = router
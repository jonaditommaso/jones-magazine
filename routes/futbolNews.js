const { Router } = require('express');
const router = Router();
const { getFutbolNews } = require('../controllers/futbolNewsController.js');

router.route('/')
    .get(getFutbolNews)

module.exports = router
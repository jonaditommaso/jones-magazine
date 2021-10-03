const { Router } = require('express');
const router = Router();
const { getRiverNews } = require('../controllers/riverController.js');

router.route('/')
    .get(getRiverNews)

module.exports = router
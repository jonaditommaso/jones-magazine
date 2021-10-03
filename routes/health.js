const { Router } = require('express');
const router = Router();
const { getHealthNews } = require('../controllers/healthController.js');

router.route('/')
    .get(getHealthNews)

module.exports = router
const { Router } = require('express');
const router = Router();
const { getTechnologyNews } = require('../controllers/technologyController.js');

router.route('/')
    .get(getTechnologyNews)

module.exports = router
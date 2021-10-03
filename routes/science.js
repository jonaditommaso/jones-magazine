const { Router } = require('express');
const router = Router();
const { getScienceNews } = require('../controllers/scienceController.js');

router.route('/')
    .get(getScienceNews)

module.exports = router
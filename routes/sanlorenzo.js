const { Router } = require('express');
const router = Router();
const { getSanLorenzoNews } = require('../controllers/sanlorenzoController.js');

router.route('/')
    .get(getSanLorenzoNews)

module.exports = router
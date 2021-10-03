const { Router } = require('express');
const router = Router();
const { getGeneralNews } = require('../controllers/generalNewsController.js');

router.route('/')
    .get(getGeneralNews)

module.exports = router
const { Router } = require('express');
const router = Router();
const { getRacingNews } = require('../controllers/racingController.js');

router.route('/')
    .get(getRacingNews)

module.exports = router
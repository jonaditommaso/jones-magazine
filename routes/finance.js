const { Router } = require('express');
const router = Router();
const { getFinanceNews } = require('../controllers/financeController.js');

router.route('/')
    .get(getFinanceNews)

module.exports = router
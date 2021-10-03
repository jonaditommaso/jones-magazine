const financeNews = {}
const NewsModel = require('../models/News');
const finance = require('../utils/financeData');


financeNews.getFinanceNews = async (req, res) => {
    await NewsModel.find();
    res.json(finance)
}

module.exports = financeNews
const healthNews = {}
const NewsModel = require('../models/News');
const health = require('../utils/healthData');


healthNews.getHealthNews = async (req, res) => {
    await NewsModel.find();
    res.json(health)
}

module.exports = healthNews
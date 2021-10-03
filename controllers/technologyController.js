const technologyNews = {}
const NewsModel = require('../models/News');
const technology = require('../utils/technologyData');


technologyNews.getTechnologyNews = async (req, res) => {
    await NewsModel.find();
    res.json(technology)
}

module.exports = technologyNews
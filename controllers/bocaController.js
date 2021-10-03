const bocaNews = {}
const NewsModel = require('../models/News');
const boca = require('../utils/bocaData');


bocaNews.getBocaNews = async (req, res) => {
    await NewsModel.find();
    res.json(boca)
}

module.exports = bocaNews
const futbolNews = {}
const NewsModel = require('../models/News');
const futbol = require('../utils/futbolData');


futbolNews.getFutbolNews = async (req, res) => {
    await NewsModel.find();
    res.json(futbol)
}

module.exports = futbolNews
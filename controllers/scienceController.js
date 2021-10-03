const scienceNews = {}
const NewsModel = require('../models/News');
const science = require('../utils/scienceData');


scienceNews.getScienceNews = async (req, res) => {
    await NewsModel.find();
    res.json(science)
}

module.exports = scienceNews
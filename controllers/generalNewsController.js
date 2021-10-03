const generalNews = {}
const NewsModel = require('../models/News');
const general = require('../utils/generalData');


generalNews.getGeneralNews = async (req, res) => {
    await NewsModel.find();
    res.json(general)
}

module.exports = generalNews
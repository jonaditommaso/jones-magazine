const riverNews = {}
const NewsModel = require('../models/News');
const river = require('../utils/riverData');


riverNews.getRiverNews = async (req, res) => {
    await NewsModel.find();
    res.json(river)
}

module.exports = riverNews
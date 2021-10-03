const racingNews = {}
const NewsModel = require('../models/News');
const racing = require('../utils/racingData');


racingNews.getRacingNews = async (req, res) => {
    await NewsModel.find();
    res.json(racing)
}

module.exports = racingNews
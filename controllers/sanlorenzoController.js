const sanlorenzoNews = {}
const NewsModel = require('../models/News');
const sanlorenzo = require('../utils/sanlorenzoData');


sanlorenzoNews.getSanLorenzoNews = async (req, res) => {
    await NewsModel.find();
    res.json(sanlorenzo)
}

module.exports = sanlorenzoNews
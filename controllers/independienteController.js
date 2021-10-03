const independienteNews = {}
const NewsModel = require('../models/News');
const independiente = require('../utils/independienteData');


independienteNews.getIndependienteNews = async (req, res) => {
    await NewsModel.find();
    res.json(independiente)
}

module.exports = independienteNews
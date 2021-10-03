const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const newsSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    content: { type: String, required: true},
    urlToImage: {type: String, required: true}
});

module.exports = model('News', newsSchema)
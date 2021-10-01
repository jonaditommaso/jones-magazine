const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const conversationSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    content: { type: String, required: true},
    comments: {type: String, required: false}
});

module.exports = model('Conversation', conversationSchema)
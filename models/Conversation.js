const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const commentsSchema = new Schema({
    comment: String,
    date: Date
});

const conversationSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    content: { type: String, required: true},
    // comments: { type: String, required: false }
    comments: { type: [commentsSchema], required: true, default: ['algo'] } // type: [commentsSchema]
    // comments: {type: Schema.Types.ObjectId, ref: 'CommentSchema', required: false},
});

module.exports = model('Conversation', conversationSchema)
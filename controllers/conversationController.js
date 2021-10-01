const conversations = {}
const ConversationModel = require('../models/Conversation');


conversations.getConversation = async (req, res) => {
    const conversation = await ConversationModel.find();
    res.json(conversation)
}

conversations.postConversation = async (req, res) => {
    const { title, description, content, comments } = req.body;
    const newConversation = new ConversationModel({
        title,
        description,
        content,
        comments
    });
    await newConversation.save()
}

module.exports = conversations
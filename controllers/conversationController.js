const conversations = {}
const ConversationModel = require('../models/Conversation');
const mongoose = require('mongoose');

conversations.getConversation = async (req, res, next) => {
    const conversation = await ConversationModel.find();
    res.json(conversation);
    mongoose.connection.close()
    //podria usar then y catch(err =>) instead async await
    // y desde el catch, si hay un error llamar a next(err) para que vaya a un middleware que maneje los errores.
    // app.use((error, request, response, next) => {
    //     console.error(error);
    //     console.log(error.name)
    // if(error.name === 'CastError') {
        //     response.status(400).end() o .send({error: "bad request pa"})
    // }
    // else {
        //     response.status(500).end()
    // }
    // })
}

conversations.postConversation = async (req, res) => {
    const { title, description, content, comments} = req.body;
    const newConversation = new ConversationModel({
        title,
        description,
        content,
        comments: comments ? comments : [] // y asi?
    });
    await newConversation.save()
    mongoose.connection.close()
}

// conversations.postComment = async (req, res) => {
//     const { comment } = req.body;
//     const myConversation = await ConversationModel.find({ _id: req.params.idConversation });
//     const newComments = [...myConversation.comments, comment];
//     myConversation.comments = newComments;
//     await myConversation.save();
// }

module.exports = conversations
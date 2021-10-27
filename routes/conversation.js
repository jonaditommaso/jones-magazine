const { Router } = require('express');
const router = Router();
const { getConversation, postConversation, postComment } = require('../controllers/conversationController.js');

router.route('/')
    .get(getConversation)
    .post(postConversation)

// router.route('/:idConversation/comment')
//     .post(postComment)

module.exports = router
const { Router } = require('express');
const router = Router();
const { getConversation, postConversation } = require('../controllers/conversationController.js');

router.route('/')
    .get(getConversation)
    .post(postConversation)

// router.route('/:id')
//     .update(updateConversation)

module.exports = router
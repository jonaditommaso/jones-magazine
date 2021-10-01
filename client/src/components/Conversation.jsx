import React from 'react';
import history from '../history';
import { connect } from 'react-redux'
import { getConversation } from '../actions'

function Conversation({title, comments, conversation, getConversation, forum}) {

    const getConversationData = () => {
        getConversation(conversation)
        history.push('/forum')
    }

    console.log('forum-conversation', forum)

    return (
        <div>
            <h3 onClick={getConversationData}>
                {conversation ? conversation.title : title}
            </h3>
            <p><i>{comments} comentarios</i></p>
        </div>
    )
}

const mapStateToProps = state => {
    return { forum: state.forum }
}

export default connect(mapStateToProps, {getConversation})(Conversation)

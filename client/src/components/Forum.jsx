import React, { useState, useEffect } from 'react';
import '../styles/forum/forum.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button, Form } from 'react-bootstrap';
import RemoveIcon from '@material-ui/icons/Remove';
import Conversation from './Conversation';
import axios from 'axios';

function Forum() {

    const [showForm, setShowForm] = useState(false);
    const [conversations, setConversations] = useState('');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [callGetConversation, setCallGetConversation] = useState(false)

    const handleClick = () => {
        setShowForm(!showForm);
    }

    useEffect(() => {
        getConversation();
        setCallGetConversation(false)
    }, [callGetConversation, conversations]);

    const getConversation = async () => {
        const response = await axios.get('https://jones-magazine.vercel.app/api/conversation')
        setConversations(response.data)
    }

    const createConversation = async () => {
        setShowForm(false)
         await axios.post('https://jones-magazine.vercel.app/api/conversation', 
        {title, description, content});
        setCallGetConversation(true);
    }

    return (
        <div className="forum">
            <span style={{fontSize: '22px', color: '#0D6EFD'}}>FORO</span>
            <div className="forum__topics">
                <hr />

                <>
                    {conversations && conversations.map(conversation => (
                        <div key={conversation.__id}>
                            <Conversation conversation={conversation} comments="Sin "/>
                            <hr />
                        </div>
                    ))}
                </>
                <div className="forum__create">
                    <div>
                        CREAR CONVERSACIÓN
                    </div>
                    <div className="forum__createIcon" onClick={handleClick}>
                        {showForm ? <RemoveIcon /> : <AddCircleOutlineIcon />}
                    </div>
                </div>

                <div className={showForm ? "forum__form" : 'd-none'}>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control 
                                size="lg" 
                                type="text" 
                                placeholder="Título de la conversación" 
                                required 
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control 
                                as="textarea" 
                                placeholder="Descripción" 
                                required 
                                rows={2}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control 
                                as="textarea" 
                                rows={6} 
                                placeholder="Exposición" 
                                required 
                                value={content}
                                onChange={e => setContent(e.target.value)}
                            />
                        </Form.Group>
                        {/* <Form.Group controlId="formFile" className="mb-3" style={{marginLeft: '1%'}}>
                            <Form.Label style={{color: '#6C8085'}}>Seleccione una imagen de encabezado</Form.Label>
                            <Form.Control 
                                type="file" 
                                style={{ width: '100%'}} 
                                accept="image/*" 
                                value={selectedImage}
                                onChange={(e) => setSelectedImage(e.target.files[0])}
                            />
                        </Form.Group> */}

                        <div className="forum__createButton">
                            <Button onClick={createConversation}>
                                Crear conversación
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Forum;

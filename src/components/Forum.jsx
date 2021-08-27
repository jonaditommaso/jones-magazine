import React, { useState } from 'react';
import '../styles/forum.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {InputGroup, FormControl, Button, Form} from 'react-bootstrap'
import RemoveIcon from '@material-ui/icons/Remove';

function Forum() {

    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm)
    }

    return (
        <div className="forum">
            <span style={{fontSize: '22px', color: '#0D6EFD'}}>FORO</span>
            <div className="forum__topics">
                <hr />
                <div>
                    <h3>
                        Comunicado RomeroTeam
                    </h3>
                    <p><i>85 comentarios</i></p>
                </div>
                
                <hr />
                <div>
                    <h3>
                        Avellaneda en busca del torneo
                    </h3>
                    <p><i>60 comentarios</i></p>
                </div>
                <hr />
                <div>
                    <h3>
                        ¿Terminó el ciclo de Gallardo?
                    </h3>
                    <p><i>25 comentarios</i></p>
                </div>
                <hr />
                <div className="forum__create">
                    <div>
                        CREAR CONVERSACIÓN
                    </div>
                    <div className="forum__createIcon" onClick={handleClick}>
                        {showForm ? <RemoveIcon /> : <AddCircleOutlineIcon />}
                    </div>
                </div>

                <div className={showForm ? "forum__form" : 'd-none'}>
                    {/* <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Título de la conversación"
                        aria-label="conversation"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Descripción"
                        aria-label="description"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup> */}

                    
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="Título de la conversación" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Control type="text" placeholder="Descripción" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Exposición" required />
                            </Form.Group>

                            <div className="forum__createButton">
                                <Button>
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

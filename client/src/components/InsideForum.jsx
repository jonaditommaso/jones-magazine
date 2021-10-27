import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import '../styles/insideForum/insideForum.css'

const InsideForum = ({forum}) => {

    const [comment, setComment] = useState('')

    return ( 
        <>
            <hr />
            <div className="insideForum">
                <h4 style={{display: 'inline'}}>
                    { forum && forum.conversation.title }
                </h4>
                <p style={{fontWeight: '300', fontSize: '22px'}}>
                    { forum && forum.conversation.description }
                </p>
                <div style={{width: '68%', margin: 'auto'}}>
                     { forum && forum.conversation.content }
                </div>
            </div>
            <div>
                {/* {`comment`} */}
            </div>
            <div>
                <hr style={{width: '60%', margin: 'auto', marginBottom: '2%', marginTop: '1%'}} />
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{width: '450px', margin: 'auto'}}>
                            <Form.Control 
                                as="textarea" 
                                placeholder="A mí me parece que ..." 
                                required 
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                </Form>
                <Button disabled>Comentar</Button>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return { forum: state.forum }
}
 
export default connect(mapStateToProps, null)(InsideForum)
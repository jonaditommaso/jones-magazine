import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function TemplateWorking({ src, text }) {
    return (
        <>
                <hr />
                <div style={{marginTop: '5%'}}>
                <img src={`assets/img/${src}.svg`} alt="work" style={{width: '300px'}}/>
                <p style={{marginTop: '5%'}}>{text}</p>
                <Link to='/'>
                    <Button variant="primary" style={{marginBottom: '5%'}}>Ir al inicio</Button>
                </Link>
                
                </div>
            </>
    )
}

export default TemplateWorking;
import React from 'react'
import { Button } from 'react-bootstrap'
import history from '../history'
import '../styles/notFound/notFound.css'

function NotFound() {
    return (
        <div className="notFound">
            <hr />
            <h1 style={{marginTop: '4%'}}>Ups!</h1>
            <h4>No hemos podido encontrar la pagina que buscas.</h4>
            <img src="assets/img/404.svg" alt="404" style={{width: '300px', marginTop: '4%', marginBottom: '3%'}} />
            <div>
            <Button 
                style={{marginBottom: '3%'}}
                variant="primary" 
                onClick={()=> history.push('/')}
            >
                Ir al inicio
            </Button>
            </div>
        </div>
    )
}

export default NotFound

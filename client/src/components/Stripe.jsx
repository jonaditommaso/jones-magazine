import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_KEY } from '../utils/key';
import '../styles/checkout/checkout.css';
import { Button } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Stripe = ({ price, name, confirm, alert, exitLibrary }) => {

    const [copied, setCopied] = useState(false);

    const handleToken = async (token) => {
        alert(false);
        confirm(true);
    } 

    const onCopy = () => {
        setCopied(true);
    }

    const onExit = () => {
        exitLibrary(true);
    }

    return ( 
        <div>
            <div style={{marginBottom: '2%', marginTop: '2%'}}>
                <CopyToClipboard text='4242 4242 4242 4242'>
                    <Button variant={!copied ? "light" : "success"} size="sm" onClick={onCopy}>
                        {!copied ? 'Copiar número de tarjeta de prueba' : '¡Copiado!'}
                    </Button>
                </CopyToClipboard>
            </div>
            <StripeCheckout
                stripeKey={STRIPE_KEY}
                token={handleToken}
                amount={price * 100}
                title={name}
                name="Ingresa los datos."
                image="assets/img/creditcard.svg"
                panelLabel="Aceptar"
            >
                <div>
                    <Button style={{height: '50px'}}>De acuerdo. ¡Hagámoslo!</Button>
                </div>
                
                
            </StripeCheckout>
            <div>
                <Button 
                    style={{height: '50px', marginTop: '4%'}} 
                    variant="danger" 
                    onClick={() => onExit()}
                >
                    Cancelar
                </Button>
            </div>
        </div>  
    );
}

export default Stripe;
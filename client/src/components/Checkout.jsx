import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BookImage from '../utils/BookImage';
import CustomizedStepper from './CustomizedStepper';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import '../styles/checkout/checkout.css';
import Stripe from './Stripe';
import history from '../history';

const MySwal = withReactContent(Swal);

const Checkout = ({basket}) => {

    const [alertOpen, setAlertOpen] = useState(false)
    const [sendConfirm, setSendConfirm] = useState(false);
    const [exitToLibrary, setExitToLibrary] = useState(false);

    const bookPrice = basket.basketList.map(books => books.price);
    const getBasketTotal = bookPrice?.reduce((amount, item) => item + amount, 0);


    useEffect(() => {

        if(exitToLibrary) {
            history.push('/library');
            MySwal.close();
        }
    }, [alertOpen, exitToLibrary]);
    

    const payMethod = () => {
        if(alertOpen ){
            MySwal.fire({
                title: 'Compra disponible sólo con tarjeta de crédito',
                html: (<Stripe confirm={setSendConfirm} alert={setAlertOpen} exitLibrary={setExitToLibrary} /> ),
                showCancelButton: false,
                showConfirmButton: false,
                backdrop: false,
            });
        }
        else {
            MySwal.close();
        }
    }

    return ( 
        <div>
            {basket.basketList?.length === 0 
            ? <>
                <hr />
                <div style={{marginTop: '5%'}}>
                <img src="assets/img/emptybasket.svg" alt="empty" style={{width: '300px'}}/>
                <p style={{marginTop: '5%'}}>No tienes artículos en la canasta.</p>
                <Link to='/library'>
                    <Button variant="primary" style={{marginBottom: '5%'}}>Regresar a la librería</Button>
                </Link>
                
                </div>
            </>
            :
            <div>
                <hr />
                <div>
                    {basket.basketList?.map((basketBook, i)=> (
                        <div key={i}>
                            <BookImage 
                                src={basketBook.src}
                                alt={`book${i}`}
                                price={basketBook.price}
                                author={basketBook.author}
                                name={basketBook.name}
                                button
                                big
                                remove
                                forRedux={basketBook}
                            />
                        </div>
                    ))}
                </div>

                <div>SUBTOTAL</div>
                <hr style={{width: '40%', margin: 'auto'}}/>
                <div>
                        <h4><span style={{fontStyle: 'italic', color: '#0D6EFD'}}>${getBasketTotal}</span></h4>
                </div>

                <div>
                    <CustomizedStepper alert={setAlertOpen} confirm={sendConfirm} />
                </div>

                <div>
                    <>{payMethod()}</>
                </div>
            </div>
            }
        </div>
     );
}

const mapStateToProps = (state) => {
    return { basket: state.basket }
}

export default connect(mapStateToProps, null)(Checkout);
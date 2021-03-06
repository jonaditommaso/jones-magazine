import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/header/header.css';
import Weather from './Weather';
import { Link } from 'react-router-dom';
import Hour from './Hour';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { IoExitOutline } from 'react-icons/io5'
import { signOutGoogle } from '../actions';
import Swal from 'sweetalert2';

const Header = ({userGoogle, signOutGoogle}) => {

    const manageClick = () => {
        Swal.fire({
            icon: 'question',
            text: '¿Está seguro que desea cerrar sesión?',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Cerrar sesión",
            cancelButtonText: "Cancelar",
            confirmButtonColor: '#0d6efd',
        }).then((result) => {
            if (result.value) {
                signOutGoogle();
                localStorage.clear();
            }
        }); 
    }

    return ( 
        <>
            <div className="customNav">
                <div className="header__left">
                    <div className="header__weather">
                        <Weather />
                    </div>
                    
                    <div className="header__hour">
                        <Hour />
                    </div>
                    
                </div>
                <div className="header__center">
                    <Link to='/'>
                        <img src="/assets/img/logo-jones.png" alt="jones" />
                    </Link>
                    
                </div>
                <div className="header__right">
                    {!userGoogle 
                    ? <div className="header__links">
                        <Link className="header__link" to='/login'>
                            <Button variant="link" size="md" >
                                INICIAR SESIÓN
                            </Button>
                        </Link>
                        <Link className="header__link" to='/signup'>
                            <Button variant="primary" size="md" >
                                REGISTRATE
                            </Button>
                        </Link>
                    </div>
                    :
                    <>
                    <div style={{display: 'flex', alignItems: 'center'}} className="header__name">
                        <h6 style={{marginRight: '10px', marginTop: '20px', marginLeft: '100px', color: '#0d6efd'}}>
                            {`¡Hola, ${userGoogle?.getName()}!`}
                        </h6>
                            <IoExitOutline 
                                className="exitIcon"
                                onClick={manageClick}
                                size={30}
                            />
                    </div>
                    </>
                    }
                    
                </div>
                
            </div>
            <hr style={{margin: '1px'}}/>
            <div style={{margin: '2px'}}>
                <NavBar />
            </div>
        </>
     );
}

const mapStateToProps = (state) => {
    return { userGoogle: state.google.userId }
}
 
export default connect(mapStateToProps, { signOutGoogle })(Header);
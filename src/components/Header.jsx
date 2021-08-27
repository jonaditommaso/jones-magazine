import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/header.css';
import Weather from './Weather';
import { Link } from 'react-router-dom';
import Hour from './Hour';
import NavBar from './NavBar';

const Header = () => {
    return ( 
        <div className="theHeader">
            <div className="nav">
                <div className="header__left">
                    {/* Quiénes somos */}
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
                
            </div>
            <hr style={{margin: '1px'}}/>
            <div style={{margin: '2px'}}>
                <NavBar />
            </div>
        </div>
     );
}
 
export default Header;
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
                    {/* <Link className="header__link"> */}
                    {/* <Link to='/login'> */}
                        {/* <div className="header__buttons"> */}
                            <Button variant="link" size="md" >
                                {/* <Link className="header__link"> */}
                                INICIAR SESIÓN
                                {/* </Link> */}
                                
                            </Button>
                        {/* </div> */}
                    
                    {/* </Link> */}
                        
                    {/* </Link> */}
                    {/* <Link className="header__link"> */}
                    {/* <Link> */}
                        <Button variant="primary" size="md" >
                            REGISTRATE
                        </Button>
                    {/* </Link> */}
                        
                    {/* </Link> */}
                    
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
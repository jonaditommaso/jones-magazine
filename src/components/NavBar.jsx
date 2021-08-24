import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import '../styles/navBar.css';
import Sidebar from './Sidebar';

function NavBar() {

    const [handleSidebar, setHandleSidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const clicked = () => {
        setHandleSidebar(!handleSidebar);
    }

    return (
        <div className="theNavBar">
            
            <div className="navBar__left">
                {isOpen ? <CloseIcon onClick={() => clicked()} /> : <MenuIcon onClick={() => clicked()} />}
                
                <Sidebar open={setIsOpen} isClicked={handleSidebar} />
            </div>
            <div className="navBar__center">
                <Link to='finance' className="navBar__link">
                    FINANZAS
                </Link>
                |
                <Link to='/futbol' className="navBar__link">
                    FUTBOL
                </Link>
                |
                <Link to='/library' className="navBar__link">
                    LIBRERIA
                </Link>
            </div>
            <div className="navBar__right">
                <SearchIcon />
            </div>
        </div>
    )
}

export default NavBar;

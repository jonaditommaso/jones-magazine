import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import '../styles/navBar.css'

function NavBar() {
    return (
        <div className="theNavBar">
            <div className="navBar__left">
                <MenuIcon />
            </div>
            <div className="navBar__center">
                <Link to='finanzas' className="navBar__link">
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

import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import '../styles/navBar/navBar.css';
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';
import { IoIosMenu } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai'

function NavBar() {

    const search = useRef(null);

    const [inputNavBar, setInputNavBar] = useState('ocultar');

    const [searchingNews, setSearchingNews] = useState('');

    const [handleSidebar, setHandleSidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        search.current.focus();
    }, [inputNavBar]);

    
    const clicked = () => {
        setHandleSidebar(!handleSidebar);
    }

    const showInput = () => {
        setInputNavBar('mostrar');
    }
    const hideInput = () => {
        setInputNavBar('ocultar');
    }

    const searchNew = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            // const getNews = async () => {
            //     const newService = new NewsService();
            //     const {data} = await newService.getCovidNews(`/top-headlines?q=${searchingNews}&country=ar&apiKey=${NEWS_KEY}`);
            // }
            // getNews()
            Swal.fire({
                icon: 'warning',
                title: 'Ha ocurrido un problema',
                text: `¡Lo sentimos! No hay suficientes noticias sobre ${searchingNews} para mostrar por el momento`,
                confirmButtonText: 'De acuerdo',
                confirmButtonColor: '#0d6efd',
                showConfirmButton: true,
                backdrop: true
            })
        }
    }

    return (
        <div className="theNavBar">
            
            <div className="navBar__left">
                {isOpen ? <AiOutlineClose size={25} onClick={() => clicked()} /> : <IoIosMenu size={28} onClick={() => clicked()} />}
                
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
                <input 
                    className={inputNavBar} 
                    ref={search} 
                    placeholder="Introduce una palabra clave. Ej: covid" 
                    onKeyUp={(e) => searchNew(e)}
                    value={searchingNews}
                    onChange={e => setSearchingNews(e.target.value)}
                />
                {inputNavBar === 'ocultar' 
                ? <IoSearchOutline size={25} onClick={() => showInput()} />
                : <CloseIcon onClick={() => hideInput()} />}
            </div>
        </div>
    )
}

export default NavBar;

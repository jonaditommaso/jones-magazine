import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar/sidebar.css';
import { sidebarData } from '../utils/sidebarData';
import SubMenu from './SubMenu';

const Sidebar = ({open, isClicked}) => {

    const [sidebar, setSidebar] = useState(false);
    const [subItem, setSubItem] = useState(false);

    useEffect(() => {
        const showSidebar = () => {
            if(isClicked) {
                setSidebar(true);
                open(true);
            }
            else {
                setSidebar(false);
                open(false);
            }
        }
        showSidebar();
    }, [isClicked, open]);

    const showSubItem = (index) => {
        const newValue = subItem[index] ? false : true;
        setSubItem({...subItem, [index]: newValue});
    }

    const handleGo = () => {
        setSidebar(false);
        open(false);
    }
    
    
    return (
        <>
            <div className={sidebar ? "show" : "hidden"} >
                <div className="sidebarWrap">
                    {sidebarData.map((item, index) => {
                        return (
                            <>
                                <div className="sidebar__items" key={index} >
                                    <div className="sidebar__itemLink">
                                        <Link
                                            to={item.path} 
                                            onClick={item.subItem && (()=> showSubItem(index))}
                                            style={{textDecoration: 'none'}}
                                        >

                                            <div style={{display: 'flex'}}>
                                                <div className="sidebar__item" /*onClick={!subItem && handleGo}*/>
                                                    {item.title}
                                                </div>
                                                <div className="sidebar__arrow">
                                                    <SubMenu item={item} subItem={subItem[index]}/>
                                                </div>
                                            </div>
                                            
                                        </Link>
                                        <div>
                                            {subItem[index] && item.subItem?.map((subMenu, i) => {
                                                return (
                                                    <div key={i} >
                                                        <Link 
                                                            to={subMenu.path} 
                                                            className="sidebar__submenu" 
                                                            onClick={handleGo}
                                                        >
                                                            {subMenu.title}
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    
                                    <hr className="sidebar__hr" />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Sidebar;

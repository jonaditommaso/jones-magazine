import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';
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

    const showSubItem = () => {
        setSubItem(!subItem)
    }

    const handleGo = () => {
        setSidebar(false);
        open(false);
    }
    

    return (
        <>
            <div className={sidebar ? "show" : "hidden"} >
                <div className="sidebarWrap">{sidebarData.map((item, index) => {
                        return (
                            <>
                                <div className="sidebar__items" key={index} >
                                    <Link 
                                        to={item.path} 
                                        className="sidebar__itemLink" 
                                        // onMouseEnter={item.subItem && showSubItem} 
                                        // onMouseLeave={item.subItem && showSubItem}
                                        onClick={item.subItem && showSubItem}
                                    >
                                        <div className="sidebar__item">
                                            {item.title}
                                            
                                        </div>
                                        <div>
                                            <div className="sidebar__arrow">
                                            {/* {item.subItem && !subItem 
                                            ? <KeyboardArrowDownIcon />
                                            : item.subItem
                                            ? <KeyboardArrowUpIcon />
                                            : null
                                            } */}
                                                <SubMenu item={item} subItem={subItem}/>
                                            </div>
                                        </div>
                                        
                                        
                                        <div>
                                            {subItem && item.subItem?.map((subMenu, i) => {
                                                return (
                                                    <div key={i} >
                                                        <Link to={subMenu.path} className="sidebar__submenu" onClick={handleGo}>
                                                            {subMenu.title}
                                                        </Link>
                                                    </div>
                                                    
                                                )
                                            })}
                                        </div>
                                    </Link>
                                    
                                    <hr className="sidebar__hr" />
                                </div>
                            </>
                        )
                })}</div>
            </div>
        </>
    )
}

export default Sidebar;

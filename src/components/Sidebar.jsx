import React, { useState } from 'react'
import SideMenu from './SideMenu'
import { useSelector } from 'react-redux';
import { menus } from '../utils/videoUtils';

const Sidebar = () => {

    const [activeMenuItem, setActiveMenuItem] = useState(menus[0]?.id);

    const handleMenuClick = (menuId) => {
        setActiveMenuItem(menuId);
    };

    const isSidebarVisible = useSelector((state) => state.sidebar.isSidebarVisible)

    return (
        <>
            {isSidebarVisible && (
                <div className='min-w-56 mr-6 overlay_sidebar'>
                    <ul>
                        {menus.map((menu) => <SideMenu
                            key={menu.id}
                            onClick={() => handleMenuClick(menu.id)}
                            isActive={menu.id === activeMenuItem}
                            {...menu}
                        />)}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Sidebar
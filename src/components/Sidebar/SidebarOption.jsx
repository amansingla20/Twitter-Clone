import './SidebarOption.css';
import React from 'react'

const SidebarOption = ({active, text, Icon}) => {
    return (
        <div className={`sidebarOption ${active && 'sidebarActive'}`}>
             <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption

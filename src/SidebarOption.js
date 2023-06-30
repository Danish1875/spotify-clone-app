import React from 'react'
import './SidebarOption.css'

function SidebarOption({title, Icon}) {
    return ( //two children in one container (icon and content(home,search,lib))
        <div className='sidebarOption'>            
            {Icon && <Icon className = "sidebarOption__icon"/>}                                                              
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}    
        </div>                                         // If we have an icon have h4 title otherwise p tag title
    );
}

export default SidebarOption

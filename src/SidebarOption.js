import React from 'react'
import './SidebarOption.css'

function SidebarOption({ title, Icon, playlist }) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className="sidebarOption__icon" />}
            {playlist ? (
                <div className="sidebarOption__playlist">
                    {playlist.images && playlist.images[0] && (
                        <img 
                            src={playlist.images[0].url} 
                            alt={playlist.name}
                            className="playlist__image" 
                        />
                    )}
                    <p>{title}</p>
                </div>
            ) : (
                <p>{title}</p>
            )}
        </div>
    )
}

export default SidebarOption

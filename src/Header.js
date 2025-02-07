import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }] = useDataLayerValue();

    return (
        <div className='header'>  
            <div className='header__left'>
                <SearchOutlinedIcon />
                <input 
                    placeholder='Search for Artists, Songs, or podcasts '
                    type="text"
                />
            </div>
          
            <div className='header__right'>
                <AccountCircleOutlinedIcon src = {user?.images[0]?.url} alt = {user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>     
        </div>
    );
}

export default Header

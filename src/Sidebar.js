import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();   //all we need is playlist from sidebar
    console.log(playlists);

    return (
        <div className='sidebar'>
            <img className='sidebar__logo'
            src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''/>
        
        <SidebarOption Icon={HomeOutlinedIcon} title = "Home" />
        <SidebarOption Icon={SearchOutlinedIcon} title = "Search" />
        <SidebarOption Icon={LibraryMusicOutlinedIcon} title = "Your Library" />

        <br />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        <hr />       {/*line break*/}

        {playlists?.items?.map(playlist => (
            <SidebarOption title = {playlist.name} />

        ))}

        </div>

    );
}

export default Sidebar

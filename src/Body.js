import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SongRow from './SongRow';

function Body( {spotify} ) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();   //pulls from datalayer

    // Update the playPlaylist function
    const playPlaylist = (id) => {
        if (!discover_weekly?.id) {
            console.error('No playlist selected');
            return;
        }
        
        spotify
          .play({
            context_uri: `spotify:playlist:${discover_weekly.id}`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          })
          .catch(error => console.error('Error playing playlist:', error));
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div className='body'>
            <Header spotify = {spotify}/>

            <div className='body__info'>
                <img src = {discover_weekly?.images[0].url} alt = ""/>

                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_shuffle' onClick = {playPlaylist}/>
                    <FavoriteOutlinedIcon fontSize='large' />
                    <MoreHorizOutlinedIcon />
                </div>
                
                {/* List of songs */}
                {discover_weekly?.tracks.items.map(item =>(
                    <SongRow playSong={playSong} track = {item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;

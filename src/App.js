import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();    //allows to interact back n forth with spotify and react webpage



function App() {
  const [{user, token}, dispatch] = useDataLayerValue();   //datalayer syntax to retrieve items from the datalayer list  // {user} - same as datalayer.user


  //runs code based on a given condition
  useEffect(() => {
    const hash  = getTokenFromUrl();   //after clicking agree spotify handles authentication
    window.location.hash = "";          //strips it and makes a clean url
    const _token = hash.access_token;

    if (_token) {
      
      spotify.setAccessToken(_token);    //magic key to interact with spotify and react

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist('37i9dQZEVXcJSB0z6KuUxL').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });


    
      spotify.getMe().then((user) => {     //once danny is logged in and uses dispatch

        dispatch({                     //it pops inn user into datalayer
          type: 'SET_USER',
          user: user,                  //pulls from datalayer
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

    }

  }, [token, dispatch]);

  

  return (
    <div className="app">
      {/* if logged inn else not logged inn */}
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;

//npm i spotify-web-wpi-js :- creates a wrapped which allows to interact with music on spotify (api)
//       {token ? <Player spotify = {spotify}/> : <Login />}

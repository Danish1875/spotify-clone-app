import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {    //state
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,
         //Remove after finish developing...
    //token:  "BQCjUMY0R1WLpxTcU-XzQKj3gYSsOa4UjE64B9GDlTTswGkYV-IIFnOUnfllQ7PINBVYyyQC--qkxWzLii8tt_YyR4KHPY2prr61ymjEr4_FnZxpIr2VLSymURDYvwpoN0kwqZNdqvfz1bFbcel7pDnkx425TYh1HfMdmIglvc-AvP9lxAYc",
};

const reducer = (state, action) => {
     console.log(action);

// Action -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,             //keep whatever is in current state
                user: action.user,      //update user slice with what ever action
            };

        case "SET_PLAYING":
                return {
                  ...state,
                  playing: action.playing,
                };

        case "SET_ITEM":
                return {
                    ...state,
                    item: action.item,
                };
                
        case "SET_DISCOVER_WEEKLY":
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                };
                
        case "SET_TOP_ARTISTS":
                return {
                  ...state,
                  top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,  // Set token instead of user
            };
        
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
            
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,    //update playlist to what ever playlist is passed in payload
            }

                default: 
                return state;
    }
};

export default reducer;
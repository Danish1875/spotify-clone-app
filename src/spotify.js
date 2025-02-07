// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "86147bf8cc3742af92d97bccaedb5b19";
const redirectUri = "http://localhost:3000/";

const scopes = [                 //These are the stuff which is allowed by the user
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private",
    "playlist-read-collaborative"
];

export const getTokenFromUrl = () => {
    return window.location.hash         //goes to that hashtag after locallhost
        .substring(1)   //get the first substring
        .split('&')     //do not require extra parameters passed
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=danish for example
            //it splits till the = sign
            let parts = item.split('=');
            //go into initial array returned for accesstoken decode that compnent
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


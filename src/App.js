import React,{useState,useEffect} from "react"
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from "./spotify";
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-js'
import {useDataLayerValue} from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {
  const [{user,token},dispatch] = useDataLayerValue(); 

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type : "SET_TOKEN",
        token : _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user:user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch ({
          type: 'SET_PLAYLISTS',
          playlists:playlists,
        });
      });

      spotify.getPlaylist('37i9dQZF1DX3I9bqAkK5Dr').then(response => {
        dispatch ({
          type: 'SET_TELUGU_INDIE',
          telugu_indie : response,
        });
      })
    }
    console.log('I have a token -->',token);
  },[]);

  // console.log('-->',user);
  // console.log('==>',token)

  return (
    <div className="app">{token?
    <Player spotify={spotify}/>:
    <Login />}
    </div>
  );
}

export default App;

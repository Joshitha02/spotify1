import React,{useEffect, useState} from 'react'
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDatalayerValue } from './Datalayer';
const spotify =new SpotifyWebApi();

function App() {
  //Run codes based on a give condition
  
  const [{user,token},dispatch] = useDatalayerValue(); 

  useEffect(()=>
  {
    const hash = getTokenFromUrl()
    window.location.hash = "";
    const _token = hash.access_token;
    
    if(_token)
    {
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })
      
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        dispatch({
          type:'SET_USER',
          user:user,
        })
      });
      spotify.getUserPlaylists().then(playlists=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })

      })
      spotify.getPlaylist('37i9dQZF1EUMDoJuT8yJsl').then(response=>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,

        })
        )
    }
    
  },[]);
  
  return (
    <div className='app'> 
    {
      token ? (
        //we can do it without using a datalayer passing spotify means passing token
        <Player spotify={spotify}/>
      ):(
        <Login/>
      )
      
    }
      
    </div>
  )
}

export default App
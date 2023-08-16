import React from 'react'
import './Body.css';
import SongRow from './SongRow';
import Header from './Header';
import { useDatalayerValue } from './Datalayer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Body({spotify}) {
  const [{discover_weekly},dispatch] = useDatalayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} alt=""/>
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
        <h2>Discover weekly</h2>
        <p>{discover_weekly?.description}</p>
        </div>
        <div className="body_songs">
          <div className="body_icons">
            <PlayCircleIcon className='body_shuffle'/>
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon/>
          </div>
        </div>
        {discover_weekly?.tracks.items.map(item=>
          <SongRow track = {item.track}/>
          )}
      </div>
      </div>
  )
}

export default Body
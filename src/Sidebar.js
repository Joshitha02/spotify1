import React from 'react'
import "./Sidebar.css"
import {useDatalayerValue} from "./Datalayer"
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
function Sidebar() {
  const [{playlists},dispatch] = useDatalayerValue();
  return (
    <div className="sidebar">
    <img 
    className="sidebar_logo"
    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
    alt="spotify logo"/>
    <SidebarOption Icon={HomeIcon} option="Home"/>
    <SidebarOption Icon ={SearchIcon} option="Search"/>
    <SidebarOption Icon={LibraryMusicIcon} option="your Library"/>
    <br/>
    <strong className="sidebar_title">
      PLAYLISTS
    </strong>
    <hr/>
    {playlists?.items?.map(playlist=>(
      <SidebarOption option={playlist.name}/>
    ))}
    
    </div>
  )
}

export default Sidebar
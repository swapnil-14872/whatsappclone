import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
//rt SettingsIcon from '@mui/icons-material/Settings';
import {Avatar,IconButton} from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import db from './firebase';
function Sidebar() 
{
    const [rooms,setrooms]=useState([]);
    useEffect(()=> {
          db.collection('rooms').onSnapshot( snapshot => (
            setrooms(snapshot.docs.map(doc =>(
                {
                    id : doc.id,
                    data : doc.data()
                }
            )))
          ));
    },[]);
  return (
  <div className='sidebar'>
      <div className='sidebar_header'>
         <Avatar/>
         <div className='sidebar_headerRight'>
             <IconButton>
             <DonutLargeIcon/>
             </IconButton>
             <IconButton>
             <ChatIcon/>
             </IconButton>
             <IconButton>
             <MoreVertIcon/>
             </IconButton>
             
         </div>
      </div>
      <div className='sidebar_search'>
          <div className='sidebar_searchContainer'>
          <SearchIcon/>
         <input placeholder='Search or start new chat' type="text"/> 
      </div>
         
      </div>
      <div className='sidebar_chats'>
          <SidebarChat addnewchat/>
         {rooms.map( room => (<SidebarChat key={room.id} id={room.id} 
            name={room.data.name}/>))}
      </div>
  </div>
  )
}

export default Sidebar;

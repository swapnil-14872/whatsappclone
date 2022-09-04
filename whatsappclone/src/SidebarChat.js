import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
import db from './firebase';
import { Link } from 'react-router-dom';
function SidebarChat({ id,name,addnewchat}) 
{
    const [seed,setseed]=useState('');

    useEffect(()=>{
         setseed(Math.floor(Math.random()*5000));
    },[]);

const createchat= () =>
{
   const roomname= prompt("please enter name for chat");

   if(roomname)
   {
       db.collection("rooms").add({
        name:roomname,
       });
   }
};
  return  !addnewchat ? (
    <Link to={`/rooms/${id}`}>
        <div className='sidebarchat'>
       <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
       <div className='sidebarchat_info'>
           <h2>{name}</h2>
           <p>last message ...</p>
       </div>

  </div>
    </Link>

  
  ) : (
  <div onClick={createchat} className='sidebarchat'>
      <h2>Add new chat</h2>
  </div>
  );
}

export default SidebarChat;

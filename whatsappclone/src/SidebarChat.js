import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
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
       //interaction with database
   }
};
  return  !addnewchat ? (
  <div className='sidebarchat'>
       <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
       <div className='sidebarchat_info'>
           <h2>{name}</h2>
           <p>last message ...</p>
       </div>

  </div>
  ) : (
  <div onClick={createchat} className='sidebarchat'>
      <h2>Add new chat</h2>
  </div>
  );
}

export default SidebarChat;

import {Avatar,IconButton} from '@mui/material';
import React , {useState,useEffect} from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css'
function Chat() 
{
    const [seed,setseed]=useState('');
    const [input, setinput]= useState('');

    useEffect(()=>{
         setseed(Math.floor(Math.random()*5000));
    },[]);

    const sendmessage= (e) =>
    {
         e.preventDefault();
         console.log("you typed >>", input);
         setinput('');

    }
  return (
  <div className='chat'>
    
    <div className='chat_header'>
       <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
 
       <div className='chat_headerinfo'> 
         <h3>Room name</h3>
         <p>Last seen at ...</p> 
        
        </div>
        <div className='chat_headerright'> 
            <IconButton>
            <SearchIcon/>
             </IconButton>
             <IconButton>
             <AttachFileIcon/>
             </IconButton>
             <IconButton>
             <MoreVertIcon/>
             </IconButton>
        
        </div>

    </div>
    <div className='chat_body'>
       <p className={`chat_message ${true && "chat_receiver"}`}>
       <span className='chat_name'>SS</span>
           Hey boys
       <span className='chat_timestamp'>3:52 pm</span>
       </p>
    </div>
    <div className='chat_footer'>
          <InsertEmoticonIcon/>
          <form>
              <input value={input} 
              onChange={(e) => setinput(e.target.value)}
               type="text" placeholder='type a message'/>
              <button onClick={sendmessage} 
              type='submit'>Send a message</button>
          </form>
          <MicIcon/>
    </div>
  </div>);
}

export default Chat;

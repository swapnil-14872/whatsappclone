import './App.css';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
	const [user,setuser]= useState(null);
	{/*if there is a user show a login screen else show your chats*/}
  return (
    <div className="app">
		{!user ? (<h1>Login</h1>) :(<div className="app_body">
	 <BrowserRouter>
	 <Sidebar/> {/*always  show sidebar*/}
			<Routes>
				<Route path="/rooms/:roomid"  element={<Chat/>}/>
				<Route path="/" element={<h1>this is home screen</h1>}/>
			</Routes>
	 </BrowserRouter>
      
      </div>)}
	  </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
     <div className="app_body">
	 <BrowserRouter>
	 <Sidebar/> {/*always  show sidebar*/}
			<Routes>
				<Route path="/rooms/:roomid"  element={<Chat/>}/>
				<Route path="/" element={<h1>this is home screen</h1>}/>
			</Routes>
	 </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;

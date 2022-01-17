import '../App.css';
import React from "react";
import { SocketProvider } from '../Contexts/SocketContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Create from '../Pages/Create'
import Rooms from '../Pages//Rooms'
import Room from '../Pages/Room'
import Lobby from './Lobby'
import LangSelector from './LangSelector';
import Home from '../Pages/Home';

function App() {
  return (
    <SocketProvider>
      
      <div className="App">
      <LangSelector />
        {/* <Lobby/> */}
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/create" element={<Create />} />
              <Route path="/room/:code" element={<Room />} />
            </Routes>
        </BrowserRouter>
      </div>
    </SocketProvider>
  );
}

export default App;

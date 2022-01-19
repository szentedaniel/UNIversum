import '../App.css';
import React from "react";
import { SocketProvider } from '../Contexts/SocketContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Toaster } from 'react-hot-toast';

import Create from '../Pages/Create'
import Rooms from '../Pages//Rooms'
import Room from '../Pages/Room'
import LangSelector from './LangSelector';
import Home from '../Pages/Home';
import Loading from './Loading';

function App() {
  return (
    <SocketProvider>
      
      <div className="App">
        <LangSelector />
        <Loading />
        <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
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

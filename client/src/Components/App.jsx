import '../App.css';
import React from "react";
import { SocketProvider } from '../Contexts/SocketContext';
import Lobby from './Lobby'
import LangSelector from './LangSelector';

function App() {
  return (
    <SocketProvider>
      
      <div className="App">
      <LangSelector />
        <Lobby/>
      </div>
    </SocketProvider>
  );
}

export default App;

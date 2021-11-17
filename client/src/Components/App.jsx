import '../App.css';
import React from "react";
import { SocketProvider } from '../Contexts/SocketContext';
import Lobby from './Lobby'

function App() {
  return (
    <SocketProvider>
      <div className="App">
        <Lobby/>
      </div>
    </SocketProvider>
  );
}

export default App;

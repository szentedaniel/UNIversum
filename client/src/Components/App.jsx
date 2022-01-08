<<<<<<< HEAD:client/src/Components/App.js
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
=======
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
>>>>>>> d04c70d644eb99b7ee79067bf526fa02f35b834a:client/src/Components/App.jsx

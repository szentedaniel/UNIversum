import './App.css';
import io from 'socket.io-client'
import { useState } from "react";

const socket = io.connect('http://localhost:3001')

function App() {
  
  const [room, setRoom] = useState('');
  const [roomCode, setRoomCode] = useState('');

  const createRoom = () => {
    if(room === ''){
      
      socket.emit('create_room')
      socket.on('get_room', data => {
        joinRoom(data.room)
      })
    }
  }

  const joinRoom = (room, create = true) => {
    socket.emit('join_room', {room: room, create: create})
    socket.on('joined_room', data => {
      if (data.status === 200) {
        setRoom(data.room)
        console.log(`Joined to room: ${room}`)
        console.log(data.rooms)
        console.log(data.socketdata)
      }else{
        console.log(`Status: ${data.status}, Couldn't find room`)
      }
    })
    
  }


  return (
    <div className="App">
      <h1>{room ?? room}</h1>
      <button onClick={createRoom}> Create Room</button>
      <p>OR</p>
      <input type="text" onChange={e => setRoomCode(e.target.value)} />
      <button onClick={() =>joinRoom(roomCode, false)}> Join Room</button>
    </div>
  );
}

export default App;

import './App.css';
import { generateName } from './randomName';
import io from 'socket.io-client'
import { useState, useEffect } from "react";

const socket = io.connect('http://localhost:3001')

function App() {
  const [username, setUsername] = useState('')
  const [team, setTeam] = useState(null);
  const [room, setRoom] = useState(null);
  const [roomCode, setRoomCode] = useState(null);

  if (username === '') {
    const name = generateName()
    setUsername(name)
    console.log(name)
    socket.emit('set_username', {username: username})
  }
  
  useEffect(() => {
    socket.on('get_room', data => {
      joinRoom(data.room)
    })

    socket.on('joined_room', data => {
      if (data.status === 200) {
        setRoom(data.room)
        console.log(`Joined to room: ${room}`)
        console.log(data.team)
        setTeam(data.team)
      }else{
        console.log(`Status: ${data.status}, ${data.message}`)
      }
    })

    socket.on('leaved_room', () => {
      setRoom(null)
      setTeam(null)
    })

    socket.on('user_joined', data => {
      console.log(data)
      setTeam(data.team)
    })

    socket.on('user_left', data => {
      console.log(data)
      setTeam(data.team)
    })


    return () => {
      socket.off('get_room')
      socket.off('joined_room')
      socket.off('leaved_room')
      socket.off('user_joined')
      socket.off('user_left')
    }
  }, [room])





  const createRoom = () => {
    if(room === null){
      
      socket.emit('create_room')
    }
  }

  const joinRoom = (room, create = true) => {
    socket.emit('join_room', {room: room, create: create})
    
  }

  const leaveRoom = () => {
    socket.emit('leave_room')
    
  }


  return (
    <div className="App">
      <h1>Username: {username}</h1>
      <h2>{room ? 'Room: ' + room : 'Not in room'}</h2>
      {!room
      ?<><button onClick={createRoom}> Create Room</button>
      <p>OR</p>
      <input type="text" onChange={e => setRoomCode(e.target.value)} />
      <button onClick={() => joinRoom(roomCode, false)}> Join Room</button></>
      : <><button onClick={() =>leaveRoom()}> Leave Room</button>
      {(team !== null && room !== null) &&
      team['users'].map(member => <p key={member.userId}>{member.userId}</p>)}
      </>}
    </div>
  );
}

export default App;

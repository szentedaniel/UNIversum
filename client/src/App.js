import './App.css';
import { generateName } from './randomName';
import toast, { Toaster } from 'react-hot-toast';
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
    socket.emit('set_username', {username: name})
  }
  
  useEffect(() => {
    socket.on('get_room', data => {
      joinRoom(data.room)
    })

    socket.on('joined_room', data => {
      if (data.status === 200) {
        setRoom(data.room)
        console.log(`Joined to room: ${data.room}`)
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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('Code copied!!', 
    {
      style: {
        backgroundColor: '#d4896a',
        color: '#503c52'
      },
      iconTheme: {
        primary: '#503c52',
        secondary: '#d4896a',
      },
    })
  } 


  return (
    <div className="App">
      <h1 >Username:</h1>
      <h2 className="text_shadows">{username}</h2>
      <h2>{room ? <><div> Room: <span className="code" onClick={() => {copyToClipboard(room)}}> {room} </span></div></>: 'Not in room'}</h2>
      {!room
      ?<><button className="pushable" onClick={createRoom}> <span className="front">Create Room</span></button>
      <p>OR</p>

      <input onKeyPress={(e) => {
        if (!/[0-9]/.test(e.key) || e.target.value.length > 5) {
          e.preventDefault();
        }
      }} type="text" onChange={e => setRoomCode(e.target.value)} />

      <button className="pushable" onClick={() => joinRoom(roomCode, false)}>
        <span className="front"> Join Room</span>
        </button></>
      : <><button className="pushable" onClick={() =>leaveRoom()}> 
      <span className="front"> Leave Room</span>
      </button>
      {(team !== null && room !== null) &&
      team['users'].map(member => <p key={member.userId}>{member.username}</p>)}
      </>}


      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;

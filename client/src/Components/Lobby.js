/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { generateName } from '../randomName';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";
import { useSocket } from '../Contexts/SocketContext'
import { LobbiesList } from './LobbiesList'


function Lobby () {
  const socket = useSocket()

  const [username, setUsername] = useState('')
  const [team, setTeam] = useState(null);
  const [room, setRoom] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [roomCode, setRoomCode] = useState(null);
  const [showLobbies, setShowLobbies] = useState(false)

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

  const getRooms = () => {
    socket.emit('get_rooms_req')
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

  const inputCodeHandler = (e) => {
    if (!/[0-9]/.test(e.key) || e.target.value.length > 5) {
      e.preventDefault();
    }
  }

  const showLobbyHandler = () => {
    console.log(socket.connected)
    setShowLobbies(!showLobbies)
    if (!showLobbies) getRooms()
    socket.off('get_rooms_res').on('get_rooms_res', data => {
      setRooms(data)
    })
  }

    
return(
    <div>
      <h1>Username:</h1>
      <h2 className="text_shadows">{username}</h2>
      <h2>{room ? <>
      <div> Room: <span className="code" onClick={() => {copyToClipboard(room)}}> {room} </span></div></>: 'Not in lobby'}</h2>
      {
        !room
          ?
          <>
            {
              !showLobbies ? <>
              <button className="pushable" onClick={createRoom}> <span className="front">Create lobby</span></button>
            <p>OR</p>

            <input onKeyPress={(e) => inputCodeHandler(e)} type="text" onChange={e => setRoomCode(e.target.value)} />
            <button className="pushable" onClick={() => joinRoom(roomCode, false)}>
              <span className="front"> Join lobby</span>
            </button>
            <p>OR</p>
            <button className="pushable" onClick={() => showLobbyHandler()}>
              <span className="front"> Show lobbies</span>
            </button>
               </>
               : <>
               <button className="pushable" onClick={() => showLobbyHandler()}>
              <span className="front"> Back</span>
            </button>
            <LobbiesList rooms={rooms} joinRoom={joinRoom}/>
               </>
            }
            
          </>
          : 
          <>
            <button className="pushable" onClick={() =>leaveRoom()}> 
              <span className="front"> Leave Room</span>
            </button>
            {(team !== null && room !== null) &&
            team['users'].map(member => <p key={member.userId}>{member.username}</p>)}
          </>
      }
      <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
    </div>
    
)
}

export default Lobby
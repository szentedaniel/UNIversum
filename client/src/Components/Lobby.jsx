/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { generateName } from '../randomName';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from "react";
import { useSocket } from '../Contexts/SocketContext'
import { LobbiesList } from './LobbiesList'
import { CreateLobby} from './CreateLobby'
import { InLobby} from './InLobby'

import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";



function Lobby () {
  const socket = useSocket()
  const { t, i18n } = useTranslation();

  const [username, setUsername] = useState('')
  const [team, setTeam] = useState(null);
  const [room, setRoom] = useState(null);
  const [rooms, setRooms] = useState(null);
  const [roomCode, setRoomCode] = useState(null);
  const [showLobbies, setShowLobbies] = useState(false)
  const [creatingLobby, setCreatingLobby] = useState(false)
  const [reqStatus, setReqStatus] = useState(null)
  const [joinedLobbyHasPassword, setJoinedLobbyHasPassword] = useState(false)
  const [pwd, setPwd] = useState(null)

  //if (username === '') {
  //  const name = generateName(i18n.language)
  //  setUsername(name)
  //  socket.emit('set_username', {username: name})
  //}

  useEffect(() => {
    const name = generateName(i18n.language)
    setUsername(name)
    socket.emit('set_username', {username: name})
    return () => {
      return
    }
  }, [i18n.language])
  
  useEffect(() => {
    socket.on('get_room', data => {
      joinRoom(data.room, true, data.password)
    })

    socket.on('joined_room', data => {
      if (data.status === 200) {
        setRoom(data.room)
        console.log(`Joined to room: ${data.room}`)
        console.log(data.team)
        setTeam(data.team)
      }else{
        console.log(`Status: ${data.status}, ${data.message}`)
        setJoinedLobbyHasPassword(false)
        if (data.status === 402) setJoinedLobbyHasPassword(true)
      }
      setReqStatus(data.status)
      console.log(reqStatus)
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





  const createRoom = (roomData) => {
    if(room === null){
        
        socket.emit('create_room', roomData)
    }
  }

  const joinRoom = (room, create = true, password = null) => {
    socket.emit('join_room', {room: room, create: create, password: password})
    
  }

  const leaveRoom = () => {
    socket.emit('leave_room')
  }

  const getRooms = () => {
    socket.emit('get_rooms_req')
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
      <h1>{t('username')}:</h1>
      <h2 className="text_shadows">{username}</h2>
      {!room?
        <>
        <h2>{t('not_in_lobby')}</h2>
          {
            !showLobbies ? 
              <>
              
                <Link to='/create'>
                  <button className="pushable" >  
                    <span className="front">{t('create_lobby')}</span>
                  </button>
                </Link>
                
                <p>{t('or')}</p>
 
                <input onKeyPress={(e) => inputCodeHandler(e)} type="text" onChange={e => setRoomCode(e.target.value)} />
                {joinedLobbyHasPassword && <p>Password: <input className="key" type="text" autoComplete="off" onChange={e => setPwd(e.target.value)}/></p>}
                <button className="pushable" onClick={() => joinRoom(roomCode, false, pwd)}>
                  <span className="front">{t('join_lobby')}</span>
                </button>

                <p>{t('or')}</p>

                <Link to='/rooms' state={{rooms: rooms}}>
                  <button className="pushable" onClick={() => showLobbyHandler()}>
                    <span className="front">{t('show_lobbies')}</span>
                  </button>
                </Link>
              
              </>
            : 
              <LobbiesList rooms={rooms} joinRoom={joinRoom} showLobbyHandler={showLobbyHandler}/>
          }
        </>
      :
        <Link state={{team : team, room : room, leaveRoom: leaveRoom, toast: toast}}>
          <InLobby team={team} room={room} leaveRoom={leaveRoom} toast={toast}/>
        </Link>
      }
      <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
    </div>
    
)
}

export default Lobby
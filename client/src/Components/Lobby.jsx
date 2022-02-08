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
import { useSelector } from 'react-redux'



function Lobby () {
  const socket = useSocket()
  const { t, i18n } = useTranslation();

  const user = useSelector((state) => state.user)

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
  let firstLoad = true

  useEffect(() => {
    const name = user.username
    setUsername(name)
    
    firstLoad = false
    return () => {
      return
    }
  }, [i18n.language])
  
  useEffect(() => {
    socket.on('get_room', data => {
      joinRoom(data.room, true, data.password)
    })



    return () => {
        socket.off('get_room')
        socket.off('joined_room')
        socket.off('leaved_room')
        socket.off('user_joined')
        socket.off('user_left')
    }
  }, [room])


  const joinRoom = (room, create = true, password = null) => {
    socket.emit('join_room', {room: room, create: create, password: password})
  }





  const inputCodeHandler = (e) => {
    if (!/[0-9]/.test(e.key) || e.target.value.length > 5) {
      e.preventDefault();
    }
  }
    
return(
    <div>
      <h1>{t('username')}:</h1>
      <h2 className="text_shadows">{username}</h2>
      
        <>
        <h2>{t('not_in_lobby')}</h2>
          {<>
              
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
                  <button className="pushable">
                    <span className="front">{t('show_lobbies')}</span>
                  </button>
                </Link>
              
              </>
            
          }
        </>
      
    
    </div>
    
)
}

export default Lobby
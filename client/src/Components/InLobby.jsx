import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useSocket } from '../Contexts/SocketContext'

export function InLobby ({room, setRoom, code}){
  const socket = useSocket()
  const navigate = useNavigate()

  useEffect(() => {
    socket.on('leaved_room', data => {
      //console.log(data);
      navigate('/')
    })

    socket.on('user_joined', data => {
      setRoom(data.team)
    })

    socket.on('user_left', data => {
      setRoom(data.team)
    })
    return () => {
      socket.off('leaved_room')
      socket.off('user_joined')
      socket.off('user_left')
    }
  }, [])

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

  const leaveRoom = () => {
    socket.emit('leave_room')
    navigate('/')
  }

    return(
        <>
        <h2><div>Room: <span className="code" onClick={() => {copyToClipboard(code)}}> {code} </span></div></h2>
        <button className="pushable" onClick={() =>leaveRoom()}> 
              <span className="front"> Leave Room</span>
            </button>
            {room &&
            room['users'].map(member => <p key={member.userId}>{member.username}</p>)}
        </>
    )
}
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSocket } from '../Contexts/SocketContext'
import { LobbyElement } from "./LobbyElement";
import { Link } from "react-router-dom";


export function LobbiesList () {
  const socket = useSocket()
  const location = useLocation();
  const { rooms } = location.state;
  const [Rooms, setRooms] = useState(rooms)
    if (Rooms !== null) console.log(Rooms['rooms'])

    useEffect(() => {
      socket.on('get_rooms_res', data => {
        console.log(Object.keys(data['rooms']))
        if (data !== null) setRooms(data)
      })
      return () => {
        socket.off('get_rooms_res')
      }
    }, [Rooms])

    const joinRoom = (room, create = true, password = null) => {
      socket.emit('join_room', {room: room, create: create, password: password})
      
    }
    
return(
    <>
    <Link to='/'>
      <button className="pushable">
        <span className="front">Back</span>
      </button>
    </Link>
    <h3>Room counter: {(Rooms !== null) ? Object.keys(Rooms['rooms']).length.toString() : 0}</h3>
    {(Rooms !== null) &&
      Object.keys(Rooms['rooms']).map((roomCode,index) => 
        <LobbyElement
          key={index}
          lobbyName = {Rooms['rooms'][roomCode].lobbyName}
          roomCode = {Rooms['rooms'][roomCode].code}
          usersCount = {Rooms['rooms'][roomCode].users.length}
          usersMax = {Rooms['rooms'][roomCode].maxPlayerNumber}
          hasPassword = {Rooms['rooms'][roomCode].hasPassword}
          password = {Rooms['rooms'][roomCode].password}
          joinFun = {joinRoom}
        />)
    }
    </>
    
)
}
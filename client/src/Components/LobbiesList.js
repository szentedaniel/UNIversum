/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useSocket } from '../Contexts/SocketContext'
import { LobbyElement } from "./LobbyElement";


export function LobbiesList ({rooms, joinRoom}) {
  const socket = useSocket()
  const [Rooms, setRooms] = useState(rooms)
    if (Rooms !== null) console.log(Object.keys(Rooms['rooms']))

    useEffect(() => {
      socket.on('get_rooms_res', data => {
        console.log(Object.keys(data['rooms']))
        if (data !== null) setRooms(data)
      })
      return () => {
        socket.off('get_rooms_res')
      }
    }, [Rooms])
    
return(
    <>
    {(Rooms !== null) &&
      Object.keys(Rooms['rooms']).map((roomCode,index) => 
        <LobbyElement
          key={index}
          roomCode = {Rooms['rooms'][roomCode].code}
          usersCount = {Rooms['rooms'][roomCode].users.length}
          usersMax = {4}
          joinFun = {joinRoom}
        />)
    }
    </>
    
)
}
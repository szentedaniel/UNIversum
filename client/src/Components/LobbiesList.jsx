/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useSocket } from '../Contexts/SocketContext'
import { LobbyElement } from "./LobbyElement";


export function LobbiesList ({rooms, joinRoom, showLobbyHandler}) {
  const socket = useSocket()
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
    
return(
    <>
    <button className="pushable" onClick={() => showLobbyHandler()}>
                <span className="front"> Back</span>
                </button>
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
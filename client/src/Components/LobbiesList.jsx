/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../Store/slices/loadingSlice'
import { useSocket } from '../Contexts/SocketContext'
import { LobbyElement } from "./LobbyElement";
import { Link } from "react-router-dom";


export function LobbiesList() {
  // socket
  const socket = useSocket()

  //redux store
  const { isLoading } = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  // navigate
  const navigate = useNavigate()


  const [Rooms, setRooms] = useState(null)

  useEffect(() => {

    dispatch(setLoading(true))

    socket.off('get_rooms_res').on('get_rooms_res', data => {

      console.log(data['rooms'])
      if (data !== null) setRooms(data)

      dispatch(setLoading(false))

    })

    socket.off('joined_room').on('joined_room', data => {

      console.log(data)
      if (data.status === 200) {
        navigate(`/room/${data.room}`, {state: {room: data.room}})
      }
      socket.off('get_rooms_res')
      dispatch(setLoading(false))

    })

    socket.emit('get_rooms_req')
    return () => {
      socket.off('get_rooms_res')
      socket.off('joined_room')
    }
  }, [0])



  const joinRoom = (room, create = true, password = null) => {
    socket.emit('join_room', {
      room: room,
      create: create,
      password: password
    })

  }
return(
    <>
    <Link to='/' onClick={() => socket.off('get_rooms_res')}>
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
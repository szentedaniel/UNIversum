import React, { useEffect, useState } from 'react'
import { InLobby } from '../Components/InLobby'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../Store/slices/loadingSlice'
import { useSocket } from '../Contexts/SocketContext'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PasswordPopup from '../Components/PasswordPopup'




function Room() {

    const { code } = useParams();
    const socket = useSocket()
    const navigate = useNavigate()

    //redux store
    const { isLoading } = useSelector((state) => state.loading)
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()

    //console.log(code);
    const [room, setRoom] = useState(null)
    const [message, setMessage] = useState('')
    const [showPasswordPopup, setShowPasswordPopup] = useState(false);
    const [pw, setPw] = useState(null)

    

    const getRoomById = (id) => {
        socket.emit('get_room_by_id_req', id)
    }

    const joinRoom = (room, create = true, password = null) => {
        socket.emit('join_room', {room: room, create: create, password: password})
    }


    const openPasswordInput = () => {
        setShowPasswordPopup(true)
    }


    const joinHandler = (Room) => {
        if (Room) {
            if (!Room.hasPassword) {
                joinRoom(Room.code, false, null)
            }else {
                openPasswordInput()
            }
        }
    }
    //oldal betöltésekor
    useEffect(() => {
        dispatch(setLoading(true))
        socket.off('get_room_by_id_res')
        .on('get_room_by_id_res', data => {
            console.log(data);
            setRoom(data.room)
            setMessage(data.message)
            dispatch(setLoading(false))
            joinHandler(data.room)
        })
        getRoomById(code)

        socket.off('joined_room').on('joined_room', data => {
            console.log(data)
            setRoom(data.team)
        })
        

        return () => {
            socket.off('get_room_by_id_res')
            socket.off('joined_room')
        }
    }, [0])

    // ha kapott jelszót akkor...
    useEffect(() => {
        if (room) {
            joinRoom(room.code, false, pw)
            console.log({code: room.code, pw: pw});
            
        }
      }, [pw]);
    

    const backToHome = () => {
        navigate('/')
      }
    
    return (
        <div>
            {room ? 
            <>
                <InLobby room={room} setRoom={setRoom} code={code} />
            </>
            :
            <>
            <h1>{message}</h1>
            <button className="pushable" onClick={() =>backToHome()}> 
              <span className="front">Back to home</span>
            </button>
            </>}
            <PasswordPopup showPasswordPopup={showPasswordPopup} setPw={setPw} />
        </div>
    )
}

export default Room

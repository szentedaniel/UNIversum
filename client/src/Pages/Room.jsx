import React, { useEffect, useState } from 'react'
import { InLobby } from '../Components/InLobby'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../Store/slices/loadingSlice'
import { useSocket } from '../Contexts/SocketContext'
import { useParams } from 'react-router-dom';



function Room() {

    const { code } = useParams();

    const socket = useSocket()

  //redux store
  const { isLoading } = useSelector((state) => state.loading)
  //console.log(isLoading);
  const dispatch = useDispatch()

    //console.log(code);
    const [room, setRoom] = useState(null)
    const [message, setMessage] = useState('')

    

    const getRoomById = (id) => {
        socket.emit('get_room_by_id_req', id)
    }

    useEffect(() => {
        dispatch(setLoading(true))
        socket.off('get_room_by_id_res')
        .on('get_room_by_id_res', data => {
            console.log(data);
            setRoom(data.room)
            setMessage(data.message)
            dispatch(setLoading(false))
        })
        getRoomById(code)
        return () => {
            socket.off('get_room_by_id_res')
        }
    }, [0])
    
    return (
        <div>
            {room ? <>
                <InLobby room={room} setRoom={setRoom} code={code} />
            </>
            :
            <>
            <h1>{message}</h1>
            </>}
        </div>
    )
}

export default Room

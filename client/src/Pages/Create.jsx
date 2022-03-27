import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { CreateLobby } from '../Components/CreateLobbyComponent/CreateLobby'
import { setIsGame, setIsHomepage } from '../Store/slices/loadingSlice'



function Create() {
    const dispatch = useDispatch()
    dispatch(setIsGame(false))

    const location = useLocation();
    console.log(location.pathname);
    useEffect(() => {
        // if (location.pathname === '/')
        //     dispatch(setIsHomepage(true))
        // else dispatch(setIsHomepage(false))
    }, [])
    return (
        <div>
            <CreateLobby />
        </div>
    )
}

export default Create

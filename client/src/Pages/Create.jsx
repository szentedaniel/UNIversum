import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { CreateLobby } from '../Components/CreateLobbyComponent/CreateLobby'
import { setIsHomepage } from '../Store/slices/loadingSlice'



function Create() {
    const dispatch = useDispatch()
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

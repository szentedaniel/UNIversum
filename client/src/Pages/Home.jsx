import React, { useEffect } from 'react'
import App from '../Components/App'
import Lobby from '../Components/LobbyComponent/Lobby'
import Loading from '../Components/Loading'

import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setIsHomepage } from '../Store/slices/loadingSlice'



function Home() {
    const { isLoading } = useSelector((state) => state.loading)
    const dispatch = useDispatch()
    const location = useLocation();
    console.log(location.pathname);
    useEffect(() => {
        // if (location.pathname === '/')
        //     dispatch(setIsHomepage(true))
        // else dispatch(setIsHomepage(false))
    }, [])


    return (
        <><Lobby /></>
    )
}

export default Home

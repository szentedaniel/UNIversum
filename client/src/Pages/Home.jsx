import React from 'react'
import App from '../Components/App'
import Lobby from '../Components/Lobby'
import Loading from '../Components/Loading'

import { useSelector, useDispatch } from 'react-redux'



function Home() {
    const { isLoading }  = useSelector((state) => state.loading)
    const dispatch = useDispatch()


    return (
        <><Lobby /></>
    )
}

export default Home

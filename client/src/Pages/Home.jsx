import React from 'react'
import App from '../Components/App'
import Lobby from '../Components/Lobby'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActions } from '../Store/actions'

function Home() {
    const isLoading = useSelector(state => state.isLoading)
    const dispatch = useDispatch()

    const AC = bindActionCreators(userActions, dispatch)

    console.log(AC)
    console.log(isLoading);


    return (
        <><div onClick={() => AC.setLoading(!isLoading)}>várás be/ki</div><Lobby /></>
    )
}

export default Home

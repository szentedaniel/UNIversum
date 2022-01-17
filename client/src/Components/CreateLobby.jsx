import React from "react";
import { useSocket } from '../Contexts/SocketContext'
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export function CreateLobby ({}){
//onClick={createRoom}
const socket = useSocket()
const { t } = useTranslation();

const [lobbyName, setLobbyName] = useState(null)
const [maxPlayerNumber, setMaxPlayerNumber] = useState(4)
const [hasPassword, setHasPassword] = useState(false)
const [password, setPassword] = useState(null)


const createRoom = (roomData) => {
        socket.emit('create_room', roomData)
  }

const checkValidDatas = () =>{
    return true
}

const handleCreatingLobby = () => {
    
        if(checkValidDatas()){
            const roomData = {
                lobbyName: (lobbyName === '') ? null :lobbyName,
                maxPlayerNumber: maxPlayerNumber, 
                hasPassword: (password === '' || password === null) ? false : hasPassword, 
                password: (password === '') ? null : password
            }
            console.log(roomData)
            createRoom(roomData)
            
        }
    
}
    return(
        <>
                
            <Link to='/'><button className="pushable">  <span className="front">Back</span></button></Link>
                <div> <span>Room's name: </span><input type="text" onChange={e => setLobbyName(e.target.value)} /></div>

                <div>
                    <span>Number of max player: </span>
                <select className="combo" onChange={e => setMaxPlayerNumber(e.target.value)}>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                </select>
                </div>
                <div><input type="checkbox" name="passwordCb" id="pwdCb" onChange={e => setHasPassword(e.target.checked)} /></div>
                {hasPassword && 
                <div>
                    <p>Password: <input className="key" type="text" autoComplete="off" onChange={e => setPassword(e.target.value)}/></p></div>
                }
            
            
        

        

        <button className="pushable" onClick={() => handleCreatingLobby()}>  <span className="front">{t('create_lobby')}</span></button>
        </>
    )
}
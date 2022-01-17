import React from "react";
import { useLocation } from "react-router-dom";


export function InLobby (){

  const location = useLocation();
    const {team, room, leaveRoom, toast} = location.state;

    const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('Code copied!!', 
    {
      style: {
        backgroundColor: '#d4896a',
        color: '#503c52'
      },
      iconTheme: {
        primary: '#503c52',
        secondary: '#d4896a',
      },
    })
  } 

    return(
        <>
        <h2><div>Room: <span className="code" onClick={() => {copyToClipboard(room)}}> {room} </span></div></h2>
        <button className="pushable" onClick={() =>leaveRoom()}> 
              <span className="front"> Leave Room</span>
            </button>
            {(team !== null && room !== null) &&
            team['users'].map(member => <p key={member.userId}>{member.username}</p>)}
        </>
    )
}
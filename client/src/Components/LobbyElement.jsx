import React from "react";
import { useState } from "react";

export function LobbyElement ({lobbyName, roomCode, usersCount, usersMax, hasPassword, password, joinFun}){

  const [pw, setPw] = useState(null)

    return(
        <div className = "LobbyElement">
          <p>{lobbyName}</p>
          <span>{roomCode} | </span>
          <span>{usersCount}/{usersMax}</span>
          {hasPassword && 
                <div>
                    <p>Password: <input className="key" type="text" autoComplete="off" onChange={e => setPw(e.target.value)}/></p></div>
                }
          <button disabled={(usersCount === usersMax)} className="pushable" onClick={() => joinFun(roomCode, false, pw)}>
              <span className="front"> Join lobby</span>
          </button>
        </div>
    )
}
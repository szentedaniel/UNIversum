import React from "react";


export function LobbyElement ({roomCode, usersCount, usersMax, joinFun}){

    return(
        <div className = "LobbyElement"><span>{roomCode} | </span>
      <span>{usersCount}/{usersMax}</span>
      <button disabled={(usersCount === usersMax)} className="pushable" onClick={() => joinFun(roomCode, false)}>
              <span className="front"> Join lobby</span>
            </button>
            </div>
    )
}
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";

import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function Lobby() {
  const { t, i18n } = useTranslation();

  const user = useSelector((state) => state.user)

  // navigate
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [rooms, setRooms] = useState(null);
  const [roomCode, setRoomCode] = useState(null);

  let firstLoad = true

  useEffect(() => {
    const name = user.username
    setUsername(name)

    firstLoad = false
    return () => {
      return
    }
  }, [i18n.language])

  const joinRoom = (room) => {
    navigate(`/room/${room}`)
  }

  const inputCodeHandler = (e) => {
    if (!/[0-9]/.test(e.key) || e.target.value.length > 5) {
      e.preventDefault();
    }
  }

  return (
    <div>
      <h1>{t('username')}:</h1>
      <h2 className="text_shadows">{username}</h2>

      <>
        <h2>{t('not_in_lobby')}</h2>
        {<>
          <Link to='/create'>
            <button className="pushable" >
              <span className="front">{t('create_lobby')}</span>
            </button>
          </Link>
          <p>{t('or')}</p>
          <div className="flex flex-wrap -mx-3 mb-2 m-auto center self-center content-center justify-center items-center">
            <div className=" max-w-md px-3 ">
              {/* <label className="block uppercase text-sajat-200 text-xs font-bold mb-2" for="grid-first-name">
                Room's name
              </label> */}
              <input onKeyPress={(e) => inputCodeHandler(e)} type="text" onChange={e => setRoomCode(e.target.value)} className="appearance-none focus:ring-indigo-500 block w-full bg-sajat-400 text-sajat-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-sajat-400" id="grid-first-name" />
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <button className="pushable" onClick={() => joinRoom(roomCode)}>
              <span className="front">{t('join_lobby')}</span>
            </button>
          </div>

          {/* <input onKeyPress={(e) => inputCodeHandler(e)} type="text" onChange={e => setRoomCode(e.target.value)} /> */}

          <p>{t('or')}</p>

          <Link to='/rooms' state={{ rooms: rooms }}>
            <button className="pushable">
              <span className="front">{t('show_lobbies')}</span>
            </button>
          </Link>
        </>
        }
      </>
    </div>
  )
}

export default Lobby
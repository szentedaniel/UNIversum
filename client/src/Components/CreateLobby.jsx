import React from "react";
import { useSocket } from '../Contexts/SocketContext'
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../Store/slices/loadingSlice'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




export function CreateLobby() {
  //onClick={createRoom}
  const socket = useSocket()
  const { t } = useTranslation();
  const { isLoading } = useSelector((state) => state.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const [lobbyName, setLobbyName] = useState(null)
  const [maxPlayerNumber, setMaxPlayerNumber] = useState(4)
  const [hasPassword, setHasPassword] = useState(false)
  const [password, setPassword] = useState(null)


  const createRoom = (roomData) => {
    socket.emit('create_room', roomData)
  }

  const checkValidDatas = () => {
    return true
  }

  const handleCreatingLobby = () => {
    dispatch(setLoading(true))
    if (checkValidDatas()) {
      const roomData = {
        lobbyName: (lobbyName === '') ? null : lobbyName,
        maxPlayerNumber: maxPlayerNumber,
        hasPassword: (password === '' || password === null) ? false : hasPassword,
        password: (password === '') ? null : password
      }
      console.log(roomData)
      createRoom(roomData)

    }

    dispatch(setLoading(false))
  }


  // ha létrejött a szoba, átirányít
  useEffect(() => {
    socket.on('get_room', data => {
      console.log(data)
      navigate(`/room/${data.room}`, {
        state: {
          created: true,
          hasPassword: hasPassword,
          secret: password
        }
      })
    })
    return () => {
      socket.off('get_room')
    }
  })
  return (
    <>

      <Link to='/'><button className="pushable">  <span className="front">Back</span></button></Link>
      <form className="w-full max-w-lg items-center center content-center justify-center m-auto">
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 ">
            <label className="block uppercase tracking-wide text-sajat-200 text-xs font-bold mb-2" for="grid-first-name">
              Room's name
            </label>
            <input onChange={e => setLobbyName(e.target.value)} className="appearance-none focus:ring-indigo-500 block w-full bg-sajat-400 text-sajat-200 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-sajat-400" id="grid-first-name" type="text" placeholder="Something" />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-sajat-200 text-xs font-bold mb-2" for="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-sajat-200 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
          </div> */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-sajat-200 text-xs font-bold mb-2" for="grid-state">
              Number of max player
            </label>
            <div className="relative">
              <select onChange={e => setMaxPlayerNumber(e.target.value)} className="block appearance-none w-full bg-sajat-400 border border-gray-200 text-sajat-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-sajat-400 focus:border-gray-500" id="grid-state">
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sajat-200">
                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg> */}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-sajat-200 text-xs font-bold mb-2" for="grid-state">
              Time
            </label>
            <div className="relative">
              <select onChange={e => setMaxPlayerNumber(e.target.value)} className="block appearance-none w-full bg-sajat-400 border border-gray-200 text-sajat-200 py-3 px-4 pr-8 rounded leading-tight focus:ring-indigo-500 focus:outline-none focus:bg-sajat-400 focus:border-gray-500" id="grid-state">
                <option value="60">60 min</option>
                <option value="30">30 min</option>
                <option value="15">15 min</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sajat-200">
                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-sajat-200 text-xs font-bold mb-2 " for="grid-password">
              Password
            </label>
            <input className={`form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-sajat-200
                  ${(hasPassword ? 'bg-sajat-400' : 'bg-sajat-500')}
                  bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-sajat-200 focus:bg-sajat-400 focus:border-blue-600 focus:outline-none`}
              id="grid-password"
              type="password"
              placeholder="******************"
              disabled={!hasPassword}
              autoComplete="off"
              onChange={e => setPassword(e.target.value)} />
            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
          </div>

        </div>
        <div class="flex items-center center content-center self-center">
          <input onChange={e => setHasPassword(e.target.checked)} id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 bg-sajat-400 focus:bg-sajat-400 rounded" />
          <label for="remember-me" class="ml-2 block text-sm text-sajat-200"> Password </label>
        </div>
      </form>






      <button className="pushable" onClick={() => handleCreatingLobby()}>  <span className="front">{t('create_lobby')}</span></button>
    </>
  )
}
import React, { useEffect, useState } from 'react'
import { useElementSize, useFullscreen } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import { setIsGame } from '../Store/slices/loadingSlice';
import GameComponentNew from '../Components/GameComponentNew';
import FullscreenSwitcher from '../Components/GameComponents/FullscreenSwitcher';
import { useParams } from 'react-router-dom';
import { useSocket } from '../Contexts/SocketContext'
import { useNavigate } from "react-router-dom";


export default function Game(props) {
  const { toggle, fullscreen } = useFullscreen()
  const dispatch = useDispatch()
  dispatch(setIsGame(true))
  const [bg, setBg] = useState(null)
  const { code } = useParams();
  const navigate = useNavigate()
  const socket = useSocket()

  const getGameDataByCode = () => {
    
  }



  useEffect(() => {
    if (!bg) {
      setBg(Math.floor(Math.random() * 8 + 1))
    }
  }, [])

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };


  return (
    <>
      <div className={` blur-[2px] absolute top-0 overflow-hidden left-0 w-full h-full items-center content-center justify-center flex z-10 bg-repeat-x ${(fullscreen && 'bg-contain')}`} style={{
        backgroundImage: `url(../Images/game/background-elements-redux-fix/Backgrounds/${bg}.png)`
      }} >
      </div >
      < div className='absolute top-0 overflow-hidden left-0 w-full h-full items-center content-center justify-center flex z-10 bg-repeat-x' >
        {/* bg-gradient-to-t from-blue-200 to-blue-400 rounded-lg */}
        {/* <GameComponent
                width={width}
                height={height}
            /> */}
        <GameComponentNew numberOfPlayers={4} />
        <FullscreenSwitcher
          toggle={toggle}
          fullscreen={fullscreen}
        />

      </div >
    </>
  )
}

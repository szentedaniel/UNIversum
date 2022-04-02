import React from 'react'
import blueAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienBlue.png'
import pinkAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienPink.png'
import yellowAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienYellow.png'
import greenAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienGreen.png'

export default function PlayerInfo() {
  return (
    <>
      <div className='w-56 h-32 bg-[#F5ECE3] absolute top-0 left-0 rounded-xl border-8 border-pink-300 m-3 flex flex-1 flex-col shadow-md'>
        <div className='w-52 h-10 top-0 bg-pink-300 items-center justify-center flex text-xl font-extrabold'>Playername</div>
        <div>
          <img src={pinkAvatar} alt="" className='' />
        </div>
      </div>
      <div className='w-56 h-32 bg-[#F5ECE3] absolute top-0 right-0 rounded-xl border-8 border-blue-300 m-3 flex flex-1 flex-col shadow-md'>
        <div className='w-52 h-10 top-0 bg-blue-300 items-center justify-center flex text-xl font-extrabold'>Playername</div>
        <div>
          <img src={blueAvatar} alt="" className='' />
        </div>

      </div>

      <div className='w-56 h-32 bg-[#F5ECE3] absolute bottom-0 left-0 rounded-xl border-8 border-yellow-300 m-3 flex flex-1 flex-col shadow-md'>
        <div className='w-52 h-10 top-0 bg-yellow-300 items-center justify-center flex text-xl font-extrabold'>Playername</div>
        <div>
          <img src={yellowAvatar} alt="" className='' />
        </div>

      </div>

      <div className='w-56 h-32 bg-[#F5ECE3] absolute bottom-0 right-0 rounded-xl border-8 border-green-300 m-3 flex flex-1 flex-col shadow-md'>
        <div className='w-52 h-10 top-0 bg-green-300 items-center justify-center flex text-xl font-extrabold'>Playername</div>
        <div>
          <img src={greenAvatar} alt="" className='' />
        </div>

      </div>

    </>
  )
}

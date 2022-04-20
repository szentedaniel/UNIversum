import React from 'react'
import pinkAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienPink.png'
import blueAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienBlue.png'
import yellowAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienYellow.png'
import greenAvatar from '../../Images/game/moreenemiesanimations/Alien sprites/alienGreen.png'
import { Progress } from '@mantine/core'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nextPlayer } from '../../Store/slices/gameStateSlice'


export default function PlayerInfo(props) {
  const { players, currentPlayer } = props
  return (
    <>
      {
        players.map(player => (
          <PlayerInfoPiece {...player} key={player.colorCode} currentPlayer={currentPlayer} />
        ))
      }

    </>
  )
}



function PlayerInfoPiece(props) {
  const { colorCode, username, money, currentPlayer, playerCountdown } = props
  const dispatch = useDispatch()

  const [remain, setRemain] = useState(0)
  let img = pinkAvatar
  let color = 'pink'
  let position = 'top-0 left-0'

  if (colorCode === 1) {
    img = blueAvatar
    color = 'blue'
    position = 'top-0 right-0'
  } else if (colorCode === 2) {
    img = greenAvatar
    color = 'green'
    position = 'bottom-0 right-0'
  } else if (colorCode === 3) {
    img = yellowAvatar
    color = 'yellow'
    position = 'bottom-0 left-0'
  } else {
    img = pinkAvatar
    color = 'pink'
    position = 'top-0 left-0'
  }

  useEffect(() => {
    if (currentPlayer === colorCode) {

      const target = new Date(Date.now() + 22000).getTime()
      const interval = setInterval(() => {

        const now = new Date().getTime()
        const distance = (target - now)
        setRemain(Math.floor((distance % (1000 * 60)) / 1000))

      }, 1000)
      return () => {
        clearInterval(interval)
        setRemain(0)
      }
    }
  }, [colorCode, currentPlayer, playerCountdown])

  useEffect(() => {
    if (remain < 0) {
      console.log('lejart');
      dispatch(nextPlayer())
    }
  }, [remain])




  const formatter = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    minimumFractionDigits: 0
  })
  return (
    <div className={`w-56 h-32 bg-[#F5ECE3] absolute ${position} rounded-xl border-8 border-${color}-300 m-3 flex flex-1 flex-col shadow-md`}>
      <div className={`w-52 h-10 top-0 bg-${color}-300 items-center justify-center flex text-xl font-extrabold `}>{username}</div>
      <div className={`flex ${(colorCode === 1 || colorCode === 2) ? 'flex-row-reverse' : 'flex-row'} items-center text-center`}>
        <img src={img} alt="Alien" className='' />
        <div className='flex flex-col h-full justify-between p-6'>
          <Progress color={color} radius="xl" value={(playerCountdown) ? (remain / 20) * 100 : 0} striped animate />
          <span className='w-full'>{formatter.format(money)}</span>
        </div>
      </div>
    </div>
  )
}

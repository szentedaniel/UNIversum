import { Modal } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPCR, nextPlayer, QuarantineRoundsDowner, removePCR, resetCountdown, setRollingDiceFromQuarantine, setShowDiceRoll, setShowFirstQuarantineTab, setShowQuarantineTab } from '../../Store/slices/gameStateSlice'
import biohazad from '../../Images/game/emojis/biohazard.png'
import formatter from '../../Utils/formatter'

export default function InQuarantine() {
  const { showQuarantineTab, players, currentPlayer } = useSelector((state) => state.gameState)
  const dispatch = useDispatch()
  const [opened, setOpened] = useState(showQuarantineTab)
  const [availablePCR, setAvailablePCR] = useState(players[currentPlayer].hasPCR)
  const [hasEnoughMoney, setHasEnoughMoney] = useState(players[currentPlayer].money >= 200_000)
  const [remain, setRemain] = useState(players[currentPlayer].QuarantineRounds)
  const [alreadyClicked, setAlreadyClicked] = useState(false)

  useEffect(() => {
    if (showQuarantineTab) {
      setOpened(true)
      setAvailablePCR(players[currentPlayer].hasPCR)
      setHasEnoughMoney(players[currentPlayer].money >= 200_000)
      setRemain(players[currentPlayer].QuarantineRounds)
    }
    return () => {
      setAlreadyClicked(false)
    }
  }, [showQuarantineTab])

  const onColseHandler = () => {
    setOpened(false)
  }

  const rollHandler = () => {
    if (!alreadyClicked) {
      setAlreadyClicked(true)
      setOpened(false)
      setTimeout(() => {
        dispatch(resetCountdown())
        dispatch(setRollingDiceFromQuarantine(true))
        dispatch(setShowQuarantineTab(false))
        dispatch(setShowDiceRoll(true))
      }, 400)
    }
  }

  const buyHandler = () => {
    if (!alreadyClicked) {
      setAlreadyClicked(true)
      if (hasEnoughMoney) {
        setOpened(false)
        setTimeout(() => {
          dispatch(resetCountdown())
          dispatch(buyPCR())
          dispatch(QuarantineRoundsDowner(12))
          dispatch(setShowQuarantineTab(false))
          dispatch(setShowDiceRoll(true))
        }, 400)
      }
    }
  }

  const usePCR = () => {
    if (!alreadyClicked) {
      setAlreadyClicked(true)
      if (availablePCR) {
        setOpened(false)
        setTimeout(() => {
          dispatch(resetCountdown())
          dispatch(removePCR())
          dispatch(QuarantineRoundsDowner(12))
          dispatch(setShowQuarantineTab(false))
          dispatch(setShowDiceRoll(true))
        }, 400)
      }
    }
  }

  return (
    <>
      <Modal
        size="lg"
        // size="calc(100vw - 20vw)"
        centered
        opened={opened}
        onClose={onColseHandler}
        title={'karantén'.toUpperCase()}
        transition='slide-up'
        transitionDuration={300}
        transitiontimingfunction='ease'
        closeOnClickOutside={false}
        closeOnEscape={false}
        withCloseButton={false}
        radius={'lg'}
        classNames={{ modal: 'bg-[#F5ECE3] text-center' }}
      //overlayColor={'#F5ECE3'}
      >
        <div className='flex flex-col justify-center items-center w-auto'>
          <div className='flex flex-col items-center content-center w-32 h-32 rounded m-3 drop-shadow-md'>
            <img src={biohazad} alt="biohazad" />
          </div>

          <div className='flex flex-col w-4/5 h-16 text-xl rounded-lg bg-[#eedac6] self-center items-center justify-evenly mb-3 p-3 leading-5'>
            <span>Karanténban vagy még </span><b>{remain}</b> <span> körig. Válassz az opciók közül:</span>
          </div>

          <div
            onClick={rollHandler}
            className='flex w-4/5 h-fit text-xl m-1 p-3 bg-red-300 border-red-100 border-4 cursor-pointer rounded-full items-center justify-center hover:bg-red-400 shadow-lg'>Dobj 12-t</div>
          <div
            onClick={buyHandler}
            className={`flex w-4/5 h-fit text-xl m-1 p-3 ${hasEnoughMoney ? ' bg-orange-300 border-orange-100 hover:bg-orange-400 border-4 cursor-pointer' : 'bg-gray-300 border-gray-100 border-4'} rounded-full items-center justify-center  shadow-lg`}>Negatív PCR teszt vétele: {formatter(200000)}</div>
          <div
            onClick={usePCR}
            className={`flex w-4/5 h-fit text-xl m-1 p-3 ${availablePCR ? 'bg-green-300 hover:bg-green-400 border-green-100 border-4 cursor-pointer' : 'bg-gray-300  border-gray-100 border-4'}  rounded-full items-center justify-center shadow-lg`}>Negatív PCR tesztet felhasználása</div>
        </div>

      </Modal>
    </>

  )
}

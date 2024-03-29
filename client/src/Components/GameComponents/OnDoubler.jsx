import { Modal } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSocket } from '../../Contexts/SocketContext'
import diploma from '../../Images/game/characters/diploma.png'
import { resetCountdown, setSelectDoubler } from '../../Store/slices/gameStateSlice'

export default function OnDoubler(props) {
  const { showDoubler } = useSelector((state) => state.gameState)
  const dispatch = useDispatch()
  const [opened, setOpened] = useState(showDoubler)
  const [showLabel, setShowLabel] = useState(false)
  const { RoundOnMe } = props
  const socket = useSocket()

  useEffect(() => {
    socket.off('doubler_close_res').on('doubler_close_res', (id) => { if (id !== socket.id) onColseHandler() })
  })


  useEffect(() => {
    if (showDoubler) {
      setOpened(true)
    } else {
      setOpened(false)
      setShowLabel(false)
      //dispatch(nextPlayer())
    }
    dispatch(resetCountdown())
  }, [showDoubler])

  const onColseHandler = () => {
    if (RoundOnMe) emitDoublerClose()
    setOpened(false)

    setTimeout(() => {
      setShowLabel(true)
      dispatch(resetCountdown())
      dispatch(setSelectDoubler(true))
    }, 400);
  }
  const emitDoublerClose = () => {
    socket.emit('doubler_close_req')
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
            <img src={diploma} alt="diploma" />
          </div>

          <div className='flex flex-col w-4/5 h-32 rounded-lg bg-[#eedac6] self-center items-center justify-evenly mb-3 p-3 leading-5'>
            <span>Lediplomáztál.</span>
            <p><span className='leading-5'>Jutalmul válassz ki egy várost, ahol ezentúl a tandíj {'megduplázódik'.toUpperCase()}.</span></p>
          </div>

          {RoundOnMe && <div
            onClick={onColseHandler}
            className='flex w-fit h-fit px-4 py-2 bg-orange-300 border-orange-100 border-4 cursor-pointer rounded-full items-center justify-center hover:bg-orange-400 shadow-lg text-xl'>Remek</div>
          }
        </div>

      </Modal>

      {showLabel && <div className={`absolute transition-all ease-in-out duration-300 ${showLabel ? 'opacity-100' : 'opacity-0'}`}>
        <span className='text-4xl font-sigmar-one'>
          {'Válassz egy mezőt'}
        </span>
      </div>}
    </>
  )
}

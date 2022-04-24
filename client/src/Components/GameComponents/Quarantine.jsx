import { Modal } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPlayer, setShowFirstQuarantineTab } from '../../Store/slices/gameStateSlice'
import biohazad from '../../Images/game/emojis/biohazard.png'

export default function Quarantine() {
  const { showFirstQuarantineTab } = useSelector((state) => state.gameState)
  const dispatch = useDispatch()
  const [opened, setOpened] = useState(showFirstQuarantineTab)


  useEffect(() => {
    if (showFirstQuarantineTab) {
      setOpened(true)
    } else { setOpened(false) }
  }, [showFirstQuarantineTab])

  const onColseHandler = () => {
    setOpened(false)
    setTimeout(() => {
      dispatch(setShowFirstQuarantineTab(false))
      dispatch(nextPlayer())
    }, 400)
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

          <div className='flex flex-col w-4/5 h-32 rounded-lg bg-[#eedac6] self-center items-center justify-evenly mb-3 p-3 leading-5'>
            <span>Jaj ne! Sajnos túl sokat jártál be előadásra és elkaptad a COVID-19 vírust.</span>
            <p><span>3 körből kimaradsz.</span></p>
          </div>

          <div
            onClick={onColseHandler}
            className='flex w-fit h-fit px-4 py-2 bg-orange-300 border-orange-100 border-4 cursor-pointer rounded-full items-center justify-center hover:bg-orange-400 shadow-lg'>Megértettem</div>
        </div>

      </Modal>
    </>

  )
}

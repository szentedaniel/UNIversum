import { Modal } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { applyCardEffect, nextPlayer, resetCountdown, setShowCard } from '../../Store/slices/gameStateSlice'
import biohazad from '../../Images/game/emojis/biohazard.png'
import { GAME_CONFIG } from '../../gameConfig'

export default function ChanceCard() {
    const { showCard, selectedCard } = useSelector((state) => state.gameState)
    const dispatch = useDispatch()
    const [opened, setOpened] = useState(false)


    useEffect(() => {
        if (showCard) {
            dispatch(resetCountdown())
            setOpened(true)
        } else { setOpened(false) }
    }, [showCard])

    const onColseHandler = () => {
        setOpened(false)
        dispatch(applyCardEffect())
        setTimeout(() => {
            dispatch(setShowCard(false))
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
                title={GAME_CONFIG.cards[selectedCard].title}
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
                        <span>{GAME_CONFIG.cards[selectedCard].desc}</span>
                    </div>

                    <div
                        onClick={onColseHandler}
                        className='flex w-fit h-fit px-4 py-2 bg-orange-300 border-orange-100 border-4 cursor-pointer rounded-full items-center justify-center hover:bg-orange-400 shadow-lg'>Megértettem</div>
                </div>

            </Modal>
        </>

    )
}

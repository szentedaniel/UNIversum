import React, { useEffect, useState } from 'react'
import Dice from './Dice'
import RollDiceImage from '../../Images/game/dice/dice_detailed.png'
import useSound from 'use-sound'
import diceSfx from '../../Sounds/dice-sound.mp3';
import { useSelector, useDispatch } from 'react-redux'
import { setShowDiceRoll, setDiceRollValue } from '../../Store/slices/gameStateSlice';



export default function RollDice() {
    const { showDiceRoll } = useSelector((state) => state.gameState)
    const dispatch = useDispatch()

    const sides = [1, 2, 3, 4, 5, 6]
    const [rolling, setRolling] = useState(false)
    const [dice1, setDice1] = useState(sides[Math.floor(Math.random() * sides.length)])
    const [dice2, setDice2] = useState(sides[Math.floor(Math.random() * sides.length)])
    const [isComplete, setIsComplete] = useState(false)
    const [rollValue, setRollValue] = useState(null)
    const [play] = useSound(
        diceSfx,
        { volume: 1 }
    )

    useEffect(() => {
        setIsComplete(!showDiceRoll)
        if (showDiceRoll) setRollValue(null)
    }, [showDiceRoll])


    const roll = () => {
        if (!rollValue) {
            const roll1 = sides[Math.floor(Math.random() * sides.length)]
            const roll2 = sides[Math.floor(Math.random() * sides.length)]
            setDice1(roll1)
            setDice2(roll2)
            setRollValue(roll1 + roll2)
            setRolling(true)
            play()

            setTimeout(() => {
                setRolling(false)
            }, 1000)

            // dispatch
            dispatch(setDiceRollValue(roll1 + roll2))

            setTimeout(() => {
                setIsComplete(true)
                setTimeout(() => {
                    dispatch(setShowDiceRoll(false))
                    setRollValue(null)
                }, 300);
            }, 3500);
        }

    }


    return (
        showDiceRoll &&
        <div className={`absolute max-h-max max-w-max transition-opacity ease-in-out ${isComplete ? 'opacity-0' : 'opacity-100'}`}>

            <div className='flex flex-col flex-nowrap min-h-screen justify-center items-center'>

                <div className={`transition-all ease-in-out ${rollValue ? 'opacity-100' : 'opacity-0'} h-14 w-14 border-4 border-red-600 rounded-2xl bg-red-200/75 flex items-center justify-center text-3xl font-semibold shadow-lg ${rolling && 'Die-shaking'}`}>
                    {rollValue}
                </div>
                <div className='flex justify-center content-center'>
                    <Dice face={dice1} rolling={rolling} />
                    <Dice face={dice2} rolling={rolling} />
                </div>
                <div className={`flex items-center justify-center ${rollValue ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-red-600'} p-2 w-24 h-fit rounded-2xl shadow-lg transition-all ease-in-out`} onClick={roll}>
                    <img src={RollDiceImage} alt="Roll" className='w-8' />
                </div>
            </div>
        </div>

    )
}

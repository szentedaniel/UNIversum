import React, { } from 'react'
import GameComponent from '../Components/GameComponent'
import { useElementSize } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import { setIsGame } from '../Store/slices/loadingSlice';
import GameComponentNew from '../Components/GameComponentNew';


export default function Game(props) {
    const { ref, width, height } = useElementSize();
    const dispatch = useDispatch()
    dispatch(setIsGame(true))

    return (
        <>
            <div className=' blur-[2px] absolute top-0 overflow-hidden left-0 w-full h-full items-center content-center justify-center flex z-10 bg-repeat-x' style={{
                backgroundImage: `url(../Images/game/background-elements-redux-fix/Backgrounds/${Math.floor(Math.random() * 8 + 1)}.png)`
            }} >
            </div >
            < div className='absolute top-0 overflow-hidden left-0 w-full h-full items-center content-center justify-center flex z-10 bg-repeat-x'

                id='game' ref={ref} >
                {/* bg-gradient-to-t from-blue-200 to-blue-400 rounded-lg */}
                {/* <GameComponent
                width={width}
                height={height}
            /> */}
                <GameComponentNew />
            </div >
        </>
    )
}

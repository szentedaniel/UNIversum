import React, { } from 'react'
import GameComponent from '../Components/GameComponent'
import { useElementSize } from '@mantine/hooks';
import { useDispatch } from 'react-redux';
import { setIsGame } from '../Store/slices/loadingSlice';


export default function Game(props) {
    const { ref, width, height } = useElementSize();
    const dispatch = useDispatch()
    dispatch(setIsGame(true))

    return (
        <div className='absolute top-0 overflow-hidden left-0 w-full h-full items-center content-center justify-center flex z-10 bg-gradient-to-t from-blue-200 to-blue-400 rounded-lg' id='game' ref={ref}>
            <GameComponent
                width={width}
                height={height}
            />
        </div>
    )
}

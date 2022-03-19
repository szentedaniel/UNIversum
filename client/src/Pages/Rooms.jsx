import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LobbiesList } from '../Components/LobbiesList'
import { setIsHomepage } from '../Store/slices/loadingSlice';

function Rooms() {
    const { isLoading } = useSelector((state) => state.loading)
    const dispatch = useDispatch()
    const location = useLocation();
    console.log(location.pathname);
    useEffect(() => {
        // if (location.pathname === '/')
        //     dispatch(setIsHomepage(true))
        // else dispatch(setIsHomepage(false))
    }, [])
    return (
        <div className='h-full overflow-hidden'>
            <LobbiesList />
        </div>
    )
}

export default Rooms

import React from 'react'
import { useSelector} from 'react-redux'


function Loading() {
    const isLoading = useSelector(state => state.isLoading)

    return (
        
        <div>
            VÁROK
        </div>
        
    )
}

export default Loading

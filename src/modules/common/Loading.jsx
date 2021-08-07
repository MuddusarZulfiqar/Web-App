import React from 'react'

function Loading({isLoading}) {
    if(isLoading){
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
    else{
        return(
            <></>
        )
    }
    
    
}

export default Loading

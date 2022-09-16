import React, { useState, useEffect } from 'react'


function Image(props) {

    
    
    const loaded = () => {
        return(
            <img 
                className='image'
                src={ props.image.output_url } alt="The future is now, old man." />
        )
    };
    const notLoaded = () => {
        return(
            <div>Loading...</div>
        )
    }
    // commented out to save me money lol
    // useEffect(() => {getImage()},[])
  return (
    <div className='image'>
        {props.image ? loaded() : notLoaded()}
    </div>
  )
}

export default Image
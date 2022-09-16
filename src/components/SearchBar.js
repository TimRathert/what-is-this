import React, { useState, useEffect } from 'react'

function SearchBar(props) {
    const [ searchString, setSearchString ] = useState('')
    const deepai = require('deepai');
    deepai.setApiKey(process.env.REACT_APP_DEEPAI_APIKEY);

    const handleChange = (e) => {
        setSearchString(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getImage()
    }

    const getImage = async () => {
        console.log('getting image...')
        try{
            const response = await deepai.callStandardApi('text2img', {
                text: `${searchString}`
            });
            props.setImage(response)
            //console.log(response)
        }
        catch(e) {
            console.log(e)
        }
    }

    return (
    <form 
        className='search-bar'
        onSubmit={ handleSubmit }>
        <input type='text' name='search' value={ props.searchString } onChange={ handleChange } />
        <input type='submit' value='Generate Image' />
    </form>
  )
}

export default SearchBar
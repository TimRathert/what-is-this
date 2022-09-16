import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import '../style/main.css'
import Image from './Image'
import SearchBar from './SearchBar'

function Main() {
  const [ image, setImage ] = useState()
  
  
  return (
    <div className='main'>
      <SearchBar setImage = { setImage } />
      <Image image = { image } setImage = { setImage }/>
    </div>
  )
}

export default Main
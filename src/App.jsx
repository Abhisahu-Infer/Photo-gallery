import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/> 
      <Gallery/>
    </>
  )
}

export default App

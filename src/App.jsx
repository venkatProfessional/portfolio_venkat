import React from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>

     <Routes>
      <Route path="/" element={<Homepage />} />
     </Routes>
     
  
    </>
  )
}

export default App
import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../app/landing/HomePage'

function Routing() {
  return (
    <Routes>
      <Route path='/' element = {<HomePage/>}/>
    </Routes>
  )
}

export default Routing
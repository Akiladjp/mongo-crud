import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { AddUser } from './pages/AddUser'
import { AllUsers } from './pages/AllUsers'

function App() {

  return (
    <>
      <Routes>
        <Route element={<AddUser/>} path='/adduser' />
        <Route element={<AllUsers/>} path='/' />
      </Routes>
    </>
  )
}

export default App

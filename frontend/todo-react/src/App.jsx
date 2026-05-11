import { useState } from 'react'
import './App.css'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import TaskPage from './pages/task'
import {Route,Routes} from 'react-router-dom'
import NavBarr from './components/navbarr'

function App() {

  return (
    <>
    <NavBarr/>
    <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/task' element={<TaskPage/>}/>
      <Route path='*' element={<h1>heyyy bhavvv</h1>}/>
    </Routes>
    </>
  )
}

export default App

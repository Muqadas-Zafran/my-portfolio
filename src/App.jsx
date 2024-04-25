import React, { useEffect } from 'react'
import Navebar from './components/Navebar'
import Home from './components/Home'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"



const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
    <BrowserRouter>
    <Navebar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='' element={<Experience/>}/>
    <Route path='/project' element={<Project/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    

    </BrowserRouter>
   
    </>
  
  )
}

export default App

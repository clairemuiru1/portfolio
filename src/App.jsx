import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Service from './components/Service/Service'
import Home from './components/Home/Home'
import { CarouselDemo } from './components/Testimonials/CarouselDemo'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Service/>
      <CarouselDemo/>
      <Contact/>
    </div>
  )
}

export default App

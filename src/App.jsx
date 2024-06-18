import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { CarouselDemo } from './components/Testimonials/CarouselDemo'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Skills/>
      <Projects/>
      <CarouselDemo/>
      <Contact/>
    </div>
  )
}

export default App

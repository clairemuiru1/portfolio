import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App

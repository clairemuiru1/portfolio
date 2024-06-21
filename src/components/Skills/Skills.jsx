import React from 'react'
import "./skills.css"
function Skills() {
  return (
    <>
      <h1 className='h1'>Showcasing My Expertise:</h1>
      <h4 className='h3'> From Crafting Clean Code to Delivering Creative Solutions</h4>
      <div class="skills">
        <div class="skill-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Problem-solving</li>
            <li>Adaptability</li>
            <li>Time Management</li>
            <li>Creativity</li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Backend Skills</h3>
          <ul>
            <li>Flask</li>
            <li>Python</li>
            <li>Databases</li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Frontend Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>UI/UX</li>
            <li>Web Design</li>
            <li>Search Engine Optimization</li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Skills

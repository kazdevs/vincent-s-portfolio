import React from 'react'
import './skills.css'

const Skills = ({ paragraphs }) => {
  return (
    <div className='skills'>
      {paragraphs.map((paragraph) => {
        return (
          <li key={paragraph.id}>
            <p></p> {paragraph.p}
          </li>
        )
      })}
    </div>
  )
}

export default Skills

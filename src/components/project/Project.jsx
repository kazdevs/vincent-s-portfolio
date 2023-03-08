import React from 'react'
import './project.css'
// import ProjectImg from '../../assets/bawo.jpg'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Project = ({ id, number, image, link, title, mainText, toolsUsed }) => {
  return (
    <div className='project'>
      <h1>{number}</h1>
      <div className='project__item'>
        <div className='project__image-container'>
          <img src={image} alt='' />
        </div>
        <div className='project__details'>
          <h3>{title}</h3>
          <p>{mainText}</p>
          {/* <a href={link} className='btn'>
            Case study
          </a> */}
          {/* <Link className='btn'></Link> */}
          <Link to={`/project-detail/${id}/#`} className='btn white'>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project

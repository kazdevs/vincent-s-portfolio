import React, { useState, useEffect } from 'react'
import data from '../../sections/projects/data'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Skills from '../../components/skills/Skills'
import Navbar from '../../sections/navbar/Navbar'
// import Header from '../../sections/header/Header'
import Footer from '../../sections/footer/Footer'
import './projectDetail.css'
import { motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'

const ProjectDetail = () => {
  const [title, setTitle] = useState('')
  const [projectOverview, setProjectOverview] = useState('')
  const [image, setImage] = useState('')
  const [smallText, setsmallText] = useState('')
  const [liveLink, setLiveLink] = useState('')
  const [githubLink, setGithubLink] = useState('')
  const [inspiration, setInspiration] = useState('')
  const [paragraphs, setParagraphs] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id))
    setTitle(newPerson.title)
    setImage(newPerson.image)
    setProjectOverview(newPerson.projectOverview)
    setsmallText(newPerson.smallText)
    setLiveLink(newPerson.liveLink)
    setGithubLink(newPerson.githubLink)
    setParagraphs(newPerson.paragraphs)
    setInspiration(newPerson.inspiration)
    // alert(typeof paragraphs)
  }, [])

  // for Navigate back
  const history = useNavigate()

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.75 }}
      exit={{ opacity: 1 }}
      id='project-detail'
    >
      <section className='project__details__header'>
        <div className='header__container'>
          <h1>{title}</h1>
          <p>{smallText}</p>
          <div className='btns'>
            <a href={liveLink} target='_blank' className='btn'>
              Live Link
            </a>
            <a href={githubLink} target='_blank' className='btn white'>
              Source Code
            </a>
          </div>
        </div>
      </section>
      <div className='container project__detail__container'>
        <section className='project__detial-container'>
          <div className='project__detail__wrapper'>
            <div className='project__detail-image'>
              <img src={image} alt='' />
            </div>
          </div>
        </section>

        <section className='container project__overview'>
          <h2>Project Overview</h2>
          <p>{projectOverview}</p>
          <a href={liveLink} target='_blank' className='btn'>
            Live Link
          </a>
        </section>
        <section className='container tools__used'>
          <h2>Technologies used</h2>
          <Skills paragraphs={paragraphs}></Skills>
        </section>
        <section className='container see__prototype'>
          <h2>Inspiration</h2>
          <p>{inspiration}</p>
          <div className='btns'>
            <a href={githubLink} target='_blank' className='btn'>
              Github link
            </a>
            <a href='#home' className='btn white' onClick={() => history(-1)}>
              Go Back
            </a>
          </div>
        </section>
      </div>
      {/* <Footer></Footer> */}
    </motion.div>
  )
}

export default ProjectDetail

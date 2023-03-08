import React from 'react'
import data from './data'
import Project from '../../components/project/Project'
import { motion } from 'framer-motion'

import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.75 }}
        exit={{ opacity: 1 }}
        className='container projects__container'
      >
        <div className='section__title'>
          <h2>projects</h2>
          <div className='underline'></div>
        </div>
        <p className='projects__first-p'>
          I have worked on a variety of projects, both personal and
          proffesional. Here are some of them.
        </p>
        <div className='projects__wrapper'>
          {data.map((item) => {
            return <Project key={item.id} {...item} />
          })}
        </div>
        <div className='behance__and__dribbble'>
          <p>
            want to see some more amazing projects? Check my <span> </span>
            <span className='.behance__link'>
              <a href='https://github.com/Nue-X' target='_blank'>
                Github
              </a>
            </span>
            {/* /
            <span className='dribbble'>
              <a href=''>dribbble</a>
            </span> */}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

import React from 'react'
import { useState } from 'react'
import './about.css'
import AboutImg from '../../assets/v.png'
import Skills from '../../components/skills/Skills'
import Cv from '../../assets/Okezi__Ikokeno__Resume.pdf'
import data from './about-data'

const About = () => {
  const [paragraphs, setParagraphs] = useState(data)
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='section__title'>
          <h2>About Me</h2>
          <div className='underline'></div>
        </div>
        <div className='about__top'>
          <div className='about__left'>
            <h4>Get to Know Me!</h4>
            <div className='about__left-paragraphs'>
              <p>
                Hi, I'm Steve Vincent and I'm a Full-Stack web developer with
                2yrs+ experience. All my life I never wanted to be behind a
                computer screen because I thought it was routine work and it
                didn't exercise me enough. But then, I graduated and I felt no
                form of satisfaction or excitement. A friend reached out to me
                to get into tech because he believed I'd be great at it (he
                wasn't wrong in the end).
              </p>

              <p>
                From "Hello World" to full scale websites and applications, the
                thrill is never ending! Coding has filled up the void in my life
                and unlike I thought, it's no routine work! And the mental
                exercise is incredible! I love creating stuff that work on the
                computer and especially one that catches the eye. Learning new
                technologies trigger a form of excitement in my tummy. I love to
                solve (people's) problems — the eureka moments are priceless. I
                have been told I'm a little too tenacious. But truth is, I love
                working! I have an excellent skill at debugging and great team
                spirit.
              </p>
              <p>
                {' '}
                My specialties include quickly learning new skills and
                programming languages, problem solving, domain driven design,
                responsive design principles, website optimization, and the
                Model View View Model (MVVM) and Model View Controller (MVC)
                methods of organizing code. So far have SQL, JavaScript,
                TypeScript, HTML, CSS, React, jQuery, Bootstrap, Node.js, Mongo
                DB, Express.js, PHP, Git/GitHub, Figma, Adobe Photoshop,
                Illustrator and After Effects under my belt. I'm still
                enthusiastically grabbing onto any other programming languages,
                frameworks, or principles I can integrate into the coding web in
                my head.
              </p>
            </div>
            <a href='#contact' className='btn'>
              Contact Me
            </a>
          </div>
          <div className='about__right'>
            <div className='about__portrait'>
              <img src={AboutImg} alt='' />
            </div>
          </div>
        </div>
        <div className='about__bottom'>
          <h4>My skills</h4>
          <Skills paragraphs={paragraphs}></Skills>
          <a href={Cv} download className='btn'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

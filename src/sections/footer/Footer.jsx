import React from 'react'

import { GrLinkedinOption } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

// import { TfiLinkedin } from 'react-icons/tf'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container footer__container'>
        <div className='footer__text'>
          <h2>Vincent Steve</h2>
          <p>
            A dedicated and prolific Web developer. I enjoy writing clean code
            and creative work leads to the success of the overall product.
          </p>
        </div>
        <div className='footer__socials'>
          <h2>socials</h2>
          <div className='social__icons'>
            <a
              href='https://www.linkedin.com/in/vincent-steve-206520248/'
              target='_blank'
            >
              <GrLinkedinOption />
            </a>

            <a href='https://github.com/Nue-X' target='_blank'>
              <BsGithub />
            </a>

            <a href='mailto:stevevincent105@gmail.com' target='_blank'>
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

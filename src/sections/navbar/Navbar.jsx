import React, { useState } from 'react'
import data from './data'
import Logo from '../../assets/v.png'
import { HiMenuAlt2 } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { container, itemm } from './animation'
import { delay, motion, easeOut, easeIn, easeInOut } from 'framer-motion'
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav>
      <div className='container nav__container'>
        <div className='logo-wrapper'>
          <motion.a
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              // ease: easeIn,
            }}
            href='/'
            className='nav__logo'
          >
            <div className='logo__img-container'>
              <img src={Logo} alt='logo' />
            </div>
            <div className='logo__text'>
              <h4>Vincent Steve</h4>
              <div className='line'></div>
              <h4>Web developer</h4>
            </div>
          </motion.a>
        </div>
        <motion.ul
          variants={container}
          initial='hidden'
          animate='show'
          className='nav__menu'
        >
          {data.map((item) => (
            <div className='li-container'>
              <motion.li variants={itemm} key={item.id}>
                <Link to={`/${item.link}`}>{item.title}</Link>
              </motion.li>
            </div>
          ))}
        </motion.ul>
        <div className='hamburger__navbar-menu'>
          {toggleMenu ? (
            <RiCloseLine
              color='#fff'
              size={28}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <HiMenuAlt2
              color='#fff'
              size={28}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className='hamburger__navbar-menu_container scale-up-center'>
              <div className='hamburger__navbar-menu_container-links'>
                {data.map((item) => (
                  <li key={item.id}>
                    <Link
                      onClick={() => setToggleMenu(false)}
                      to={`/${item.link}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

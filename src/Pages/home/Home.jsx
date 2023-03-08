import './home.css'
// import Navbar from '../../sections/navbar/Navbar'
import Header from '../../sections/header/Header'
import About from '../../sections/about/About'
import Projects from '../../sections/projects/Projects'
import Contact from '../../sections/contact/Contact'
import Footer from '../../sections/footer/Footer'
import { easeIn, easeOut, motion } from 'framer-motion'

function App() {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 0.75, ease: easeOut }}
      exit={{ opacity: 1 }}
    >
      <Header />
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </motion.div>
  )
}

export default App

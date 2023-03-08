import { easeInOut } from 'framer-motion'

export const container = {
  hidden: { opacity: 0, x: '-100%' },
  show: {
    opacity: 1,
    x: '-0%',
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.2,
      duration: 2,
    },
  },
}

export const itemm = {
  hidden: { y: '-100%' },
  show: { y: '0%', transition: { duration: 0.5, ease: easeInOut } },
}

import { motion } from 'framer-motion'
import './Loader.css'

function Loader({ onComplete }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.2 }}
      onAnimationComplete={onComplete}
    >
      <div className="loader__content">
        <motion.img
          src="/isotipo-blanco-rojo.svg"
          alt="BV"
          className="loader__logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
        />
        <motion.div
          className="loader__bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut' }}
        />
        <motion.p
          className="loader__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Bali Visuals
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader

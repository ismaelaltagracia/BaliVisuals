import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__gradient"></div>
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="hero__particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}></div>
        ))}
      </div>
      <div className="hero__content">
        <motion.div
          className="hero__icon"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        >
          <img src="/isotipo-blanco-rojo.svg" alt="BV" />
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Soluciones<br />
          <span className="accent">Audiovisuales</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Producción de fotografía, video y contenido<br />
          audiovisual para marcas y eventos.
        </motion.p>

        <motion.a
          href="#contacto"
          className="hero__cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contáctanos
        </motion.a>

      </div>
    </section>
  )
}

export default Hero

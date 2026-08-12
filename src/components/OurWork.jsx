import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './OurWork.css'
import Lightbox from './Lightbox'
import TiltCard from './TiltCard'

const photos = [
  { src: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400&h=500&fit=crop', alt: 'Proyecto 1' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop', alt: 'Proyecto 2' },
  { src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=500&fit=crop', alt: 'Proyecto 3' },
  { src: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=500&fit=crop', alt: 'Proyecto 4' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop', alt: 'Proyecto 5' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop', alt: 'Proyecto 6' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop', alt: 'Proyecto 7' },
]

const logos = [
  { src: '/Logos clientes/SIDIDOM LOGO 300 .png', alt: 'SIDIDOM' },
  { src: '/Logos clientes/Elite.png', alt: 'Elite Realty Group' },
  { src: '/Logos clientes/PradoAltoLogo.png', alt: 'Prado Alto', large: true },
  { src: '/Logos clientes/Cerveza.png', alt: 'Cerveza República' },
  { src: '/Logos clientes/Dra.png', alt: 'Dra. Lisbeth Santos' },
  { src: '/Logos clientes/Sabor.png', alt: 'Sabor de la Calle' },
]

function OurWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <section id="ourwork" className="ourwork" ref={ref}>
      <div className="ourwork__gradient"></div>

      <motion.div
        className="ourwork__header"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="ourwork__title">
          <span className="accent">+20 marcas</span> confían en nuestro trabajo
        </h2>
      </motion.div>

      {/* Marquee infinito de logos */}
      <div className="ourwork__marquee">
        <div className="ourwork__marquee-track">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className={`ourwork__marquee-logo ${logo.large ? 'ourwork__marquee-logo--lg' : ''}`}
            >
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="ourwork__gallery-wrapper">
        <motion.div
          className="ourwork__gallery"
          initial={{ x: 0 }}
          animate={{ x: [0, -200, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...photos, ...photos].map((photo, index) => (
            <TiltCard key={index} className="ourwork__photo">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setLightboxIndex(index % photos.length)}
                style={{ width: '100%', height: '100%' }}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="ourwork__cta-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.a
          href="#servicios"
          className="ourwork__cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ver nuestro trabajo
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.a>
      </motion.div>

      {lightboxIndex !== null && (
        <Lightbox
          images={photos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  )
}

export default OurWork

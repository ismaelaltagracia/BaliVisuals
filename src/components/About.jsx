import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Identidad Visual Sólida',
    desc: 'No solo encendemos una cámara; pensamos visualmente. Comprendemos a fondo la construcción de marcas, asegurándonos de que cada fotografía y video respete tu línea gráfica, paleta de colores y valores corporativos a la perfección.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 9h8M8 13h4"/>
      </svg>
    ),
    title: 'Estrategia para\nRedes Sociales',
    desc: 'Conocemos el ritmo del marketing actual y la gestión de comunidades. Entregamos piezas audiovisuales dinámicas, optimizadas para cada plataforma y listas para integrarse directamente en tus campañas y grillas de contenido.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Aliados de tu Negocio',
    desc: 'Trabajamos contigo como verdaderos socios creativos. Tenemos la experiencia para entender los objetivos de distintos tipos de negocios, adaptando nuestro lenguaje visual para comunicar tu mensaje de la manera más efectiva posible.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Enfoque en Resultados',
    desc: 'Nuestro objetivo no es solo crear videos atractivos, sino herramientas de comunicación efectivas. Diseñamos cada pieza con una intención clara: captar la atención, transmitir profesionalismo y generar confianza en tu cliente ideal.',
  },
]

function About() {
  const titleRef = useRef(null)
  const gridRef = useRef(null)
  const teamRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' })
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' })
  const teamInView = useInView(teamRef, { once: true, margin: '-100px' })

  return (
    <section id="nosotros" className="about">
      <div className="about__gradient"></div>
      <div className="container">
        <motion.h2
          ref={titleRef}
          className="about__main-title"
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Por qué trabajar con <span className="accent">Bali Visuals</span>
        </motion.h2>

        <div className="about__grid" ref={gridRef}>
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="about__benefit"
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="about__benefit-icon">{item.icon}</div>
              <div className="about__benefit-content">
                <h3 className="about__benefit-title">{item.title}</h3>
                <p className="about__benefit-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="about__team" ref={teamRef}>
          <motion.h2
            className="about__team-title"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Un equipo <span className="accent">dedicado a ti</span>
          </motion.h2>
          <motion.div
            className="about__team-video"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={teamInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <video
              className="about__team-reel"
              autoPlay
              muted
              loop
              playsInline
              poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
            >
              <source src="https://cdn.coverr.co/videos/coverr-a-man-filming-with-a-camera-3609/1080p.mp4" type="video/mp4" />
            </video>
            <div className="about__team-overlay">
              <div className="about__team-badge">
                <span className="about__team-badge-icon">▶</span>
                <span>Showreel 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

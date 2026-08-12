import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const services = [
  {
    title: 'Creación',
    titleAccent: 'de Contenido',
    description: 'Piezas visuales diseñadas estratégicamente para redes sociales. Combinamos estética y tendencias para mantener perfiles dinámicos que conecten con la audiencia.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=700&h=800&fit=crop',
  },
  {
    title: 'Fotografía',
    titleAccent: 'profesional',
    description: 'Sesiones de producto, corporativas y cobertura de eventos. Construimos un banco de imágenes sólido que refuerce la línea gráfica y la identidad del negocio.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&h=800&fit=crop',
  },
  {
    title: 'Tomas',
    titleAccent: 'con Drone',
    description: 'Perspectivas únicas desde el aire. Elevamos el nivel visual de los proyectos con ángulos dinámicos y tomas de alta resolución.',
    image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=700&h=800&fit=crop',
  },
  {
    title: 'Producción',
    titleAccent: 'audiovisual',
    description: 'Videos corporativos y comerciales de alta calidad. Cuidamos cada detalle del encuadre y la edición para transmitir el mensaje de la marca con profesionalismo.',
    image: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=700&h=800&fit=crop',
  },
]

function ServiceItem({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div className="services__item" ref={ref}>
      <div className="services__item-inner container">
        <motion.div
          className="services__image"
          initial={{ opacity: 0, x: -60, rotate: -2 }}
          animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img src={service.image} alt={service.title} loading="lazy" />
          <div className="services__image-glow"></div>
        </motion.div>
        <motion.div
          className="services__text"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="services__number">0{index + 1}</span>
          <h3 className="services__title">
            {service.title}<br />
            <span className="accent">{service.titleAccent}</span>
          </h3>
          <p className="services__desc">{service.description}</p>
          <div className="services__buttons">
            <motion.a
              href="#contacto"
              className="services__btn services__btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctanos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            <motion.a
              href="#ourwork"
              className="services__btn services__btn--secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver más
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function Services() {
  const introRef = useRef(null)
  const introInView = useInView(introRef, { once: true, margin: '-100px' })

  return (
    <section id="servicios" className="services">
      <div className="services__gradient"></div>
      <div className="services__intro container" ref={introRef}>
        <motion.h2
          className="services__main-title"
          initial={{ opacity: 0, y: 40 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Todo lo que tu marca necesita para<br />
          <span className="accent">destacar visualmente.</span>
        </motion.h2>
      </div>

      {services.map((service, index) => (
        <ServiceItem key={index} service={service} index={index} />
      ))}
    </section>
  )
}

export default Services

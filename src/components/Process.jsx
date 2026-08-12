import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    desc: 'Nos reunimos contigo para entender tu marca, objetivos y audiencia. Definimos juntos el enfoque visual y la estrategia.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Planificación',
    desc: 'Diseñamos un plan de producción detallado: guiones, locaciones, cronograma y equipo necesario para cada pieza.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Producción',
    desc: 'Ejecutamos la sesión o grabación con equipo profesional. Cuidamos cada encuadre, luz y detalle para capturar la esencia de tu proyecto.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Entrega',
    desc: 'Editamos, retocamos y entregamos el material final optimizado para cada plataforma. Listo para publicar y generar impacto.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
]

function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="process" ref={ref}>
      <div className="container">
        <motion.h2
          className="process__title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Cómo <span className="accent">trabajamos</span>
        </motion.h2>
        <motion.p
          className="process__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Un proceso pensado para que tu experiencia sea sencilla y el resultado, extraordinario.
        </motion.p>

        <div className="process__timeline">
          <div className="process__line">
            <motion.div
              className="process__line-fill"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`process__step ${index % 2 === 0 ? 'process__step--left' : 'process__step--right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <div className="process__step-dot">
                <span>{step.number}</span>
              </div>
              <div className="process__step-card">
                <div className="process__step-icon">{step.icon}</div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

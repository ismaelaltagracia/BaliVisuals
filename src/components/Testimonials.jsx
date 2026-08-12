import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Bali Visuals transformó por completo la imagen de nuestra marca. El contenido que crearon superó todas nuestras expectativas.',
    name: 'María González',
    company: 'Elite Realty Group',
    role: 'Directora de Marketing',
  },
  {
    quote: 'Profesionalismo de otro nivel. Desde la primera reunión entendieron nuestra visión y la materializaron en piezas audiovisuales increíbles.',
    name: 'Carlos Méndez',
    company: 'SIDIDOM',
    role: 'CEO',
  },
  {
    quote: 'El equipo de Bali Visuals no solo graba, piensa estratégicamente. Nuestras redes crecieron un 300% desde que trabajamos juntos.',
    name: 'Laura Pérez',
    company: 'Cerveza República',
    role: 'Brand Manager',
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="testimonials" ref={ref}>
      <div className="container">
        <motion.h2
          className="testimonials__title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Lo que dicen <span className="accent">nuestros clientes</span>
        </motion.h2>

        <motion.div
          className="testimonials__carousel"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="testimonials__card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testimonials__quote-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testimonials__quote">{testimonials[current].quote}</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <p className="testimonials__name">{testimonials[current].name}</p>
                  <p className="testimonials__role">{testimonials[current].role} — {testimonials[current].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials__controls">
            <button onClick={prev} className="testimonials__arrow" aria-label="Anterior">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="testimonials__arrow" aria-label="Siguiente">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

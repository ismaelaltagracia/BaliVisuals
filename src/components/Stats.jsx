import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Stats.css'

function AnimatedNumber({ value, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(value)
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { value: 50, prefix: '+', suffix: '', label: 'Proyectos completados' },
  { value: 20, prefix: '+', suffix: '', label: 'Marcas confían en nosotros' },
  { value: 3, prefix: '', suffix: '', label: 'Años de experiencia' },
  { value: 100, prefix: '', suffix: '%', label: 'Clientes satisfechos' },
]

function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stats__item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="stats__number">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="stats__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

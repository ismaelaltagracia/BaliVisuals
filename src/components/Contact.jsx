import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: ''
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contacto" className="contact" ref={ref}>
      <div className="contact__gradient"></div>
      <div className="contact__container container">
        <motion.div
          className="contact__text"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="contact__title">
            Te ayudamos a <span className="accent">capturar<br />la esencia</span> de tu proyecto
          </h2>
          <p className="contact__desc">
            Cuéntanos sobre tu marca o evento y diseñemos juntos el contenido visual
            que necesitas para conectar con tu audiencia. Te responderemos con una
            propuesta de fotografía y video adaptada exactamente a lo que buscas transmitir.
          </p>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="form__row">
            <div className="form__group">
              <label htmlFor="name">Nombre y Apellido</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="company">Empresa / Marca</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Tu empresa o marca"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__row">
            <div className="form__group">
              <label htmlFor="email">Email corporativo</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@empresa.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="phone">Teléfono de contacto</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (809) 000.00.00"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form__group">
            <label htmlFor="service">Servicio a requerir</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Selecciona un servicio</option>
              <option value="contenido">Creación de Contenido</option>
              <option value="fotografia">Fotografía Profesional</option>
              <option value="drone">Tomas con Drone</option>
              <option value="audiovisual">Producción Audiovisual</option>
            </select>
          </div>

          <motion.button
            type="submit"
            className="form__submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Continuar
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

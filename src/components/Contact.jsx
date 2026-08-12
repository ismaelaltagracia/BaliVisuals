import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

const TELEGRAM_BOT_TOKEN = '8911724491:AAHZJFCttJKN3Zgrk0oIcAQxX6_SQJEwWo8'
const TELEGRAM_CHAT_ID = '-5550802484'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    currency: 'USD',
    comments: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const now = new Date()
    const fecha = now.toLocaleDateString('es-DO', { day: '2-digit', month: '2-digit', year: 'numeric' })
    const hora = now.toLocaleTimeString('es-DO', { hour: '2-digit', minute: '2-digit' })

    const message = `NUEVA OPORTUNIDAD // BALI VISUALS

CLIENTE
- Nombre: ${formData.name}
- Empresa: ${formData.company || 'No especificada'}
- Correo: ${formData.email}
- Telefono: ${formData.phone || 'No especificado'}

DETALLES DEL PROYECTO
- Servicio: ${formData.service}
- Presupuesto: ${formData.budget ? `$${formData.budget} ${formData.currency}` : 'No especificado'}

Comentarios / Requerimientos:
${formData.comments || 'Sin comentarios'}

Recibido: ${fecha} ${hora}`

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', company: '', email: '', phone: '', service: '', budget: '', currency: 'USD', comments: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
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
              <option value="Creación de Contenido">Creación de Contenido</option>
              <option value="Fotografía Profesional">Fotografía Profesional</option>
              <option value="Tomas con Drone">Tomas con Drone</option>
              <option value="Producción Audiovisual">Producción Audiovisual</option>
              <option value="Gestión de Redes">Gestión de Redes</option>
            </select>
          </div>

          <div className="form__row">
            <div className="form__group">
              <label htmlFor="budget">Presupuesto estimado</label>
              <div className="form__budget-row">
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="form__currency"
                >
                  <option value="USD">USD $</option>
                  <option value="DOP">RD $</option>
                </select>
                <input
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder="800"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form__group">
            <label htmlFor="comments">Comentarios / Requerimientos</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Cuéntanos los detalles de tu proyecto..."
              value={formData.comments}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className={`form__submit ${status === 'success' ? 'form__submit--success' : ''}`}
            whileHover={status === 'idle' ? { scale: 1.02 } : {}}
            whileTap={status === 'idle' ? { scale: 0.98 } : {}}
            disabled={status === 'sending'}
          >
            {status === 'idle' && 'Continuar'}
            {status === 'sending' && (
              <span className="form__spinner"></span>
            )}
            {status === 'success' && (
              <span className="form__success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ¡Enviado!
              </span>
            )}
            {status === 'error' && 'Error, intenta de nuevo'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

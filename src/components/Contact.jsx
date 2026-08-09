import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact__container container">
        <div className="contact__text">
          <h2 className="contact__title">
            Te ayudamos a <span className="accent">capturar<br />la esencia</span> de tu proyecto
          </h2>
          <p>
            Cuéntanos sobre tu marca o evento y diseñemos juntos el contenido visual
            que necesitas para conectar con tu audiencia. Te responderemos con una
            propuesta de fotografía y video adaptada exactamente a lo que buscas transmitir.
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
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

          <div className="form__group form__group--full">
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

          <button type="submit" className="form__submit">Continuar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

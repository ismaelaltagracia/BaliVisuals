import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Footer.css'

function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer className="footer" ref={ref}>
      <motion.div
        className="footer__inner"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="footer__content container">
          <div className="footer__brand">
            <img src="/logo-blanco-rojo.svg" alt="Bali Visuals" className="footer__logo-img" />
            <p className="footer__desc">
              Día tras día, somos la inversión segura que detona el alcance y la
              autenticidad de cada marca que decide creer en nuestro trabajo.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Servicios</h4>
            <ul className="footer__links">
              <li><a href="#servicios">Creación de contenido</a></li>
              <li><a href="#servicios">Producción Audiovisual</a></li>
              <li><a href="#servicios">Fotografía</a></li>
              <li><a href="#servicios">Gestión de redes</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Empresa</h4>
            <ul className="footer__links">
              <li><a href="#ourwork">Nuestro trabajo</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__links">
              <li><a href="mailto:info@balivisuals.com">info@balivisuals.com</a></li>
              <li><a href="https://wa.me/18298401312" target="_blank" rel="noopener noreferrer">+1829-840-1312</a></li>
              <li><a href="https://instagram.com/balivisualsdr" target="_blank" rel="noopener noreferrer">@balivisualsdr</a></li>
              <li><a href="https://facebook.com/balivisualsdr" target="_blank" rel="noopener noreferrer">Bali Visuals DR</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__social container">
          <div className="footer__social-icons">
            <a href="mailto:info@balivisuals.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a href="https://wa.me/18298401312" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
            <a href="https://instagram.com/balivisualsdr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com/balivisualsdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__bottom container">
          <p className="footer__copyright">2026 Bali Visuals Todos los derechos reservados</p>
          <div className="footer__legal">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de reembolso</a>
            <a href="#">Política de entrega</a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer

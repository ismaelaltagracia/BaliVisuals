import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__left">
          <h2 className="footer__title">
            Ponte en<br />
            <span className="accent">contacto</span>
          </h2>
          <div className="footer__logo">
            <img src="/logo-blanco-rojo.svg" alt="Bali Visuals" className="footer__logo-img" />
          </div>
        </div>

        <div className="footer__right">
          <a href="mailto:info@balivisuals.com" className="footer__link">
            <span className="footer__icon">✉</span>
            info@balivisuals.com
          </a>
          <a href="https://wa.me/18298401412" className="footer__link" target="_blank" rel="noopener noreferrer">
            <span className="footer__icon">📱</span>
            829-840.14.12
          </a>
          <a href="https://instagram.com/balivisualsdr" className="footer__link" target="_blank" rel="noopener noreferrer">
            <span className="footer__icon">📷</span>
            @balivisualsdr
          </a>
          <a href="https://facebook.com/balivisualsdr" className="footer__link" target="_blank" rel="noopener noreferrer">
            <span className="footer__icon">📘</span>
            Bali Visuals DR
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__gradient"></div>
      <div className="hero__content">
        <div className="hero__icon">
          <img src="/isotipo-blanco-rojo.svg" alt="BV" />
        </div>
        <h1 className="hero__title">
          Soluciones<br />
          <span className="accent">Audiovisuales</span>
        </h1>
        <p className="hero__subtitle">
          Producción de fotografía, video y contenido<br />
          audiovisual para marcas y eventos.
        </p>
        <a href="#contacto" className="hero__cta">
          Contáctanos
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Hero

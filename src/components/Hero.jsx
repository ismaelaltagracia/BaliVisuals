import './Hero.css'

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__content container">
        <div className="hero__logo-icon">
          <img src="/isotipo-blanco-rojo.svg" alt="BV" className="hero__icon" />
        </div>
        <h1 className="hero__title">
          Productora<br />
          <span className="accent">Audiovisual</span>
        </h1>
        <p className="hero__subtitle">Agencia de contenido y gestión de redes.</p>
      </div>
    </section>
  )
}

export default Hero

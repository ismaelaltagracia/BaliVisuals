import './About.css'

function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__container container">
        <div className="about__card">
          <div className="about__text">
            <h2 className="about__title">
              Nuestra <span className="accent">visión</span>
            </h2>
            <p>
              En Bali Visuals somos un equipo creativo donde la experiencia en diseño visual y
              la estrategia de contenido se unen. No solo nos dedicamos a grabar y tomar
              fotos; nos enfocamos en entender la identidad de cada proyecto para crear
              piezas que realmente conecten.
            </p>
          </div>
          <div className="about__image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Equipo creativo trabajando"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

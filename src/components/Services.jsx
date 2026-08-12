import './Services.css'

const services = [
  {
    title: 'Creación',
    titleAccent: 'de Contenido',
    description: 'Piezas visuales diseñadas estratégicamente para redes sociales. Combinamos estética y tendencias para mantener perfiles dinámicos que conecten con la audiencia.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=700&h=800&fit=crop',
  },
  {
    title: 'Fotografía',
    titleAccent: 'profesional',
    description: 'Sesiones de producto, corporativas y cobertura de eventos. Construimos un banco de imágenes sólido que refuerce la línea gráfica y la identidad del negocio.',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&h=800&fit=crop',
  },
  {
    title: 'Tomas',
    titleAccent: 'con Drone',
    description: 'Perspectivas únicas desde el aire. Elevamos el nivel visual de los proyectos con ángulos dinámicos y tomas de alta resolución.',
    image: 'https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=700&h=800&fit=crop',
  },
  {
    title: 'Producción',
    titleAccent: 'audiovisual',
    description: 'Videos corporativos y comerciales de alta calidad. Cuidamos cada detalle del encuadre y la edición para transmitir el mensaje de la marca con profesionalismo.',
    image: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=700&h=800&fit=crop',
  },
]

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="services__gradient"></div>
      <div className="services__intro container">
        <h2 className="services__main-title">
          Todo lo que tu marca necesita para<br />
          <span className="accent">destacar visualmente.</span>
        </h2>
      </div>

      {services.map((service, index) => (
        <div key={index} className="services__item">
          <div className="services__item-inner container">
            <div className="services__image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="services__text">
              <h3 className="services__title">
                {service.title}<br />
                <span className="accent">{service.titleAccent}</span>
              </h3>
              <p className="services__desc">{service.description}</p>
              <div className="services__buttons">
                <a href="#contacto" className="services__btn services__btn--primary">
                  Contáctanos
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#ourwork" className="services__btn services__btn--secondary">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Services

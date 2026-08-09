import './Services.css'

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title">
          Nuestros <span>servicios</span>
        </h2>
        <p className="section-subtitle">
          Fotografía y video profesional adaptado a las necesidades de tu negocio, cuidando cada detalle visual.
        </p>

        <div className="services__grid">
          {/* Fila 1: Contenido (grande) + Fotografía (pequeña) */}
          <div className="services__row services__row--1">
            <div
              className="services__card services__card--with-image"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 45%, rgba(0,0,0,0.2) 100%), url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop)`
              }}
            >
              <h3 className="services__card-title">
                Creación de <span className="accent">Contenido</span>
              </h3>
              <p className="services__card-desc">
                Piezas visuales diseñadas estratégicamente para redes sociales. Combinamos estética y tendencias para mantener perfiles dinámicos que conecten con la audiencia.
              </p>
            </div>

            <div className="services__card">
              <h3 className="services__card-title">
                <span className="accent">Fotografía</span> Profesional
              </h3>
              <p className="services__card-desc">
                Sesiones de producto, corporativas y cobertura de eventos. Construimos un banco de imágenes sólido que refuerce la línea gráfica y la identidad del negocio.
              </p>
            </div>
          </div>

          {/* Fila 2: Drone (pequeña) + Producción (grande) */}
          <div className="services__row services__row--2">
            <div className="services__card">
              <h3 className="services__card-title">
                {'Tomas\ncon '}
                <span className="accent">Drone</span>
              </h3>
              <p className="services__card-desc">
                Perspectivas únicas desde el aire. Elevamos el nivel visual de los proyectos con ángulos dinámicos y tomas de alta resolución.
              </p>
            </div>

            <div
              className="services__card services__card--with-image"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 100%), url(https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800&h=400&fit=crop)`
              }}
            >
              <h3 className="services__card-title">
                Producción <span className="accent">Audiovisual</span>
              </h3>
              <p className="services__card-desc">
                Videos corporativos y comerciales de alta calidad. Cuidamos cada detalle del encuadre y la edición para transmitir el mensaje de la marca con profesionalismo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

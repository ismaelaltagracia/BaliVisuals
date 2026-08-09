import './Portfolio.css'

const clients = [
  'SIDIDOM',
  'Elite Realty Group',
  'Prado Alto',
  'Cerveza República',
  'Sabor de la Calle'
]

function Portfolio() {
  return (
    <section id="portafolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">
          Nuestro <span>trabajo</span>
        </h2>
        <p className="section-subtitle">
          Resultados reales para marcas reales. Conoce cómo hemos traducido ideas y estrategias en piezas audiovisuales de alto impacto.
        </p>

        <div className="portfolio__grid">
          {/* Col 1: Sabor de la calle - tall */}
          <div className="portfolio__item portfolio__item--tall">
            <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400&h=600&fit=crop" alt="Sabor de la calle" />
            <div className="portfolio__overlay">
              <span className="portfolio__name">Sabor de<br />la calle</span>
            </div>
          </div>

          {/* Col 2: Dra. Lisbeth Santos (top) + Prado Alto (bottom) */}
          <div className="portfolio__col">
            <div className="portfolio__item">
              <img src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop" alt="Dra. Lisbeth Santos" />
              <div className="portfolio__overlay">
                <span className="portfolio__name">Dra. Lisbeth Santos</span>
              </div>
            </div>
            <div className="portfolio__item">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" alt="Prado Alto" />
              <div className="portfolio__overlay">
                <span className="portfolio__name">Prado Alto</span>
              </div>
            </div>
          </div>

          {/* Col 3: Sididom - tall */}
          <div className="portfolio__item portfolio__item--tall">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=600&fit=crop" alt="Sididom" />
            <div className="portfolio__overlay">
              <span className="portfolio__name">Sididom</span>
            </div>
          </div>

          {/* Col 4: Perfect aroma (top) + Cerveza República (bottom) */}
          <div className="portfolio__col">
            <div className="portfolio__item">
              <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=300&fit=crop" alt="Perfect aroma" />
              <div className="portfolio__overlay">
                <span className="portfolio__name">Perfect aroma</span>
              </div>
            </div>
            <div className="portfolio__item">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" alt="Cerveza República" />
              <div className="portfolio__overlay">
                <span className="portfolio__name">Cerveza República</span>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__clients">
          {clients.map((client, index) => (
            <span key={index} className="portfolio__client">{client}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

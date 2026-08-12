import './About.css'

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Identidad Visual Sólida',
    desc: 'No solo encendemos una cámara; pensamos visualmente. Comprendemos a fondo la construcción de marcas, asegurándonos de que cada fotografía y video respete tu línea gráfica, paleta de colores y valores corporativos a la perfección.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <path d="M9 13l3-8 3 8"/>
        <path d="M10 11h4"/>
      </svg>
    ),
    title: 'Estrategia para\nRedes Sociales',
    desc: 'Conocemos el ritmo del marketing actual y la gestión de comunidades. Entregamos piezas audiovisuales dinámicas, optimizadas para cada plataforma y listas para integrarse directamente en tus campañas y grillas de contenido.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Aliados de tu Negocio',
    desc: 'Trabajamos contigo como verdaderos socios creativos. Tenemos la experiencia para entender los objetivos de distintos tipos de negocios, adaptando nuestro lenguaje visual para comunicar tu mensaje de la manera más efectiva posible.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Enfoque en Resultados',
    desc: 'Nuestro objetivo no es solo crear videos atractivos, sino herramientas de comunicación efectivas. Diseñamos cada pieza con una intención clara: captar la atención, transmitir profesionalismo y generar confianza en tu cliente ideal.',
  },
]

function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__gradient"></div>
      <div className="container">
        <h2 className="about__main-title">
          Por qué trabajar con <span className="accent">Bali Visuals</span>
        </h2>

        <div className="about__grid">
          {benefits.map((item, index) => (
            <div key={index} className="about__benefit">
              <div className="about__benefit-icon">{item.icon}</div>
              <div className="about__benefit-content">
                <h3 className="about__benefit-title">{item.title}</h3>
                <p className="about__benefit-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about__team">
          <h2 className="about__team-title">
            Un equipo <span className="accent">dedicado a ti</span>
          </h2>
          <div className="about__team-video">
            <div className="about__team-placeholder"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

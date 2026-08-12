import './OurWork.css'

const photos = [
  { src: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=400&h=500&fit=crop', alt: 'Proyecto 1' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop', alt: 'Proyecto 2' },
  { src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=500&fit=crop', alt: 'Proyecto 3' },
  { src: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=500&fit=crop', alt: 'Proyecto 4' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop', alt: 'Proyecto 5' },
  { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop', alt: 'Proyecto 6' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=500&fit=crop', alt: 'Proyecto 7' },
]

function OurWork() {
  return (
    <section id="ourwork" className="ourwork">
      <div className="ourwork__gradient"></div>
      <div className="ourwork__header">
        <h2 className="ourwork__title">
          <span className="accent">+20 marcas</span> confían en nuestro trabajo
        </h2>
      </div>

      <div className="ourwork__clients">
        <div className="ourwork__client-logo">
          <img src="/Logos clientes/SIDIDOM LOGO 300 .png" alt="SIDIDOM" />
        </div>
        <div className="ourwork__client-logo">
          <img src="/Logos clientes/Elite.png" alt="Elite Realty Group" />
        </div>
        <div className="ourwork__client-logo ourwork__client-logo--lg">
          <img src="/Logos clientes/PradoAltoLogo.png" alt="Prado Alto" />
        </div>
        <div className="ourwork__client-logo">
          <img src="/Logos clientes/Cerveza.png" alt="Cerveza República" />
        </div>
        <div className="ourwork__client-logo">
          <img src="/Logos clientes/Dra.png" alt="Dra. Lisbeth Santos" />
        </div>
        <div className="ourwork__client-logo">
          <img src="/Logos clientes/Sabor.png" alt="Sabor de la Calle" />
        </div>
      </div>

      <div className="ourwork__gallery">
        {photos.map((photo, index) => (
          <div key={index} className="ourwork__photo">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      <div className="ourwork__cta-wrapper">
        <a href="#portafolio" className="ourwork__cta">
          Ver nuestro trabajo
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

export default OurWork

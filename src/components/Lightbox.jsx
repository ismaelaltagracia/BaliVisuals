import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Lightbox.css'

function Lightbox({ images, currentIndex, onClose, onChange }) {
  const goNext = useCallback(() => {
    onChange((currentIndex + 1) % images.length)
  }, [currentIndex, images.length, onChange])

  const goPrev = useCallback(() => {
    onChange((currentIndex - 1 + images.length) % images.length)
  }, [currentIndex, images.length, onChange])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, goNext, goPrev])

  return (
    <motion.div
      className="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <button className="lightbox__arrow lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); goPrev() }} aria-label="Anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="lightbox__image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex].src.replace('w=400', 'w=1200').replace('h=500', 'h=800')}
            alt={images[currentIndex].alt}
            className="lightbox__image"
          />
        </motion.div>
      </AnimatePresence>

      <button className="lightbox__arrow lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); goNext() }} aria-label="Siguiente">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      <div className="lightbox__counter">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default Lightbox

import { useEffect, useRef, useState } from 'react'

const AnimatedLetters = ({ text, className = '', delay = 0 }) => {
  const lettersRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHoverable, setIsHoverable] = useState(false)

  useEffect(() => {
    const element = lettersRef.current
    if (!element) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      setIsHoverable(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(element)
      }
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return undefined
    const hoverTimer = window.setTimeout(() => setIsHoverable(true), 2800)
    return () => window.clearTimeout(hoverTimer)
  }, [isVisible])

  return (
    <span
      ref={lettersRef}
      className={`animated-letters${isVisible ? ' is-visible' : ''}${isHoverable ? ' is-hoverable' : ''} ${className}`.trim()}
      role="text"
      aria-label={text}
    >
      {Array.from(text).map((char, index) => (
        <span
          aria-hidden="true"
          className={char === ' ' ? 'animated-letter letter-space' : 'animated-letter'}
          key={`${char}-${index}`}
          style={{ '--letter-delay': `${(index + delay) / 12}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters

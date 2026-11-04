import { useEffect, useState } from 'react'

import {
  faArrowUp,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faHome,
  faLaptopCode,
  faMoon,
  faSun,
  faUser,
  faWrench,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import About from '../About'
import Contact from '../Contact'
import Education from '../Education'
import Experience from '../Experience'
import Home from '../Home'
import Projects from '../Projects'
import Skills from '../Skills'

const sections = [
  { id: 'hero', label: 'Home', icon: faHome },
  { id: 'about', label: 'About', icon: faUser },
  { id: 'experience', label: 'Experience', icon: faBriefcase },
  { id: 'projects', label: 'Projects', icon: faLaptopCode },
  { id: 'skills', label: 'Skills', icon: faWrench },
  { id: 'education', label: 'Education', icon: faGraduationCap },
  { id: 'contact', label: 'Contact', icon: faEnvelope },
]

const getInitialTheme = () => {
  const storedTheme = window.localStorage.getItem('sahil-portfolio-theme')
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const Layout = () => {
  const [theme, setTheme] = useState(getInitialTheme)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('sahil-portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))

    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      }),
      { rootMargin: '-28% 0px -58% 0px', threshold: 0 }
    )
    document.querySelectorAll('[data-observe-section]').forEach((element) => sectionObserver.observe(element))

    const updateScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0)
      setShowBackToTop(window.scrollY > 480)
    }
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  return (
    <div className="portfolio-app">
      <div className="starfield" aria-hidden="true">
        <span className="star-layer stars-small" />
        <span className="star-layer stars-medium" />
        <span className="star-layer stars-large" />
      </div>
      <div className="viewport-code-tags" aria-hidden="true">
        <span className="viewport-code-top">&lt;body&gt;</span>
        <span className="viewport-code-bottom">&lt;/body&gt;<br />&lt;/html&gt;</span>
      </div>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(scrollProgress)}
      />
      <header className="site-header">
        <a className="site-brand" href="#hero" aria-label="Sahil Rohankar, back to top">
          <span className="brand-mark">SR</span>
        </a>
        <nav className="site-nav" aria-label="Section navigation">
          {sections.map((section) => (
            <a
              key={section.id}
              className={activeSection === section.id ? 'nav-link active' : 'nav-link'}
              href={`#${section.id}`}
              aria-current={activeSection === section.id ? 'location' : undefined}
              aria-label={section.label}
              title={section.label}
            >
              <FontAwesomeIcon icon={section.icon} aria-hidden="true" />
              <span className="nav-label">{section.label}</span>
            </a>
          ))}
        </nav>
      </header>

      <div className="header-actions">
        <FontAwesomeIcon className="theme-moon" icon={faMoon} aria-hidden="true" />
        <button
          type="button"
          className={`theme-toggle${theme === 'light' ? ' is-light' : ''}`}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle-knob" />
        </button>
        <FontAwesomeIcon className="theme-sun" icon={faSun} aria-hidden="true" />
      </div>

      <main id="main-content">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="site-footer" id="footer">
        <a className="footer-brand" href="#hero">SR</a>
        <p>Designed and built by Sahil Rohankar.</p>
        <a href="https://github.com/Sahilicious" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </footer>

      <button
        type="button"
        className={`back-to-top${showBackToTop ? ' is-visible' : ''}`}
        onClick={() => window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        })}
        aria-label="Back to top"
        tabIndex={showBackToTop ? 0 : -1}
      >
        <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
      </button>
    </div>
  )
}

export default Layout

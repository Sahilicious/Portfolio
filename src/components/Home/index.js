import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AnimatedLetters from '../AnimatedLetters'

const Home = () => (
  <section className="hero-section portfolio-section" id="hero" data-observe-section>
    <div className="section-inner hero-layout">
      <div className="hero-copy reveal" data-motion="fadeIn">
        <h1>
          <AnimatedLetters text="Hi," className="hero-title-line" delay={8} />
          <br />
          <AnimatedLetters text="I'm Sahil" className="hero-title-line" delay={14} />
          <br />
          <AnimatedLetters text="Software Developer" className="hero-title-line" delay={24} />
          <br />
          <AnimatedLetters text="Backend | Full Stack" className="hero-title-line" delay={38} />
        </h1>
        <p className="hero-summary">
          I’m Sahil Rohankar, a software developer working across backend APIs,
          web applications, and data driven tools with Python and Java.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="/Sahil-Rohankar-Resume.pdf" download>
            Download resume <span aria-hidden="true">↓</span>
          </a>
          <a className="button button-secondary" href="#projects">View projects <span aria-hidden="true">↘</span></a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <a href="https://github.com/Sahilicious" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sahil-rohankar16/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-art reveal" data-motion="zoomInDown" role="img" aria-label="Sahil Rohankar monogram">
        <span className="hero-mark" aria-hidden="true">S</span>
      </div>
    </div>
    <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
  </section>
)

export default Home

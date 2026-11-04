import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AnimatedLetters from '../AnimatedLetters'

const Contact = () => (
  <section className="portfolio-section section-contact" id="contact" data-observe-section>
    <div className="section-inner contact-layout">
      <div className="section-heading reveal" data-motion="fadeIn">
        <p className="eyebrow">06 / CONTACT</p>
        <h2><AnimatedLetters text="Let’s build" /><br /><AnimatedLetters text="something useful." className="animated-accent" delay={12} /></h2>
        <p className="contact-intro">Have a project or opportunity in mind? I’d be glad to hear from you.</p>
      </div>
      <div className="contact-panel reveal" data-motion="fadeIn">
        <a href="mailto:sahilrohankar16@gmail.com" className="contact-item">
          <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /></span>
          <span><small>EMAIL</small><strong>sahilrohankar16@gmail.com</strong></span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a href="tel:+917028983369" className="contact-item">
          <span className="contact-icon"><FontAwesomeIcon icon={faPhone} aria-hidden="true" /></span>
          <span><small>PHONE</small><strong>+91 70289 83369</strong></span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a href="https://github.com/Sahilicious" target="_blank" rel="noreferrer" className="contact-item">
          <span className="contact-icon"><FontAwesomeIcon icon={faGithub} aria-hidden="true" /></span>
          <span><small>GITHUB</small><strong>Sahilicious</strong></span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <a href="https://www.linkedin.com/in/sahil-rohankar16/" target="_blank" rel="noreferrer" className="contact-item">
          <span className="contact-icon"><FontAwesomeIcon icon={faLinkedin} aria-hidden="true" /></span>
          <span><small>LINKEDIN</small><strong>sahil-rohankar16</strong></span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
        <div className="contact-location"><FontAwesomeIcon icon={faLocationDot} aria-hidden="true" /> Pune, India</div>
      </div>
    </div>
  </section>
)

export default Contact

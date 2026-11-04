import AnimatedLetters from '../AnimatedLetters'

const Experience = () => (
  <section className="portfolio-section section-experience" id="experience" data-observe-section>
    <div className="section-inner">
      <div className="section-heading reveal" data-motion="fadeIn">
        <p className="eyebrow">02 / EXPERIENCE</p>
        <h2><AnimatedLetters text="Where I’ve" /><br /><AnimatedLetters text="been building." className="animated-accent" delay={12} /></h2>
      </div>
      <article className="experience-entry reveal" data-motion="pulse">
        <div className="experience-date">FEB 2025 — PRESENT<br /><span>PUNE, INDIA</span></div>
        <div className="experience-main">
          <p className="experience-company">NIDIK WEBCON PVT LTD</p>
          <h3>Software Developer <span>· Full-time</span></h3>
          <ul className="experience-points">
            <li>Develop and maintain web application features, CRUD APIs, and database operations for an AI-powered multi-tenant SaaS platform.</li>
            <li>Test and debug APIs, and deliver feature enhancements using MongoDB and modern web technologies.</li>
          </ul>
          <div className="tag-list"><span>MongoDB</span><span>REST APIs</span><span>Web development</span></div>
        </div>
      </article>
    </div>
  </section>
)

export default Experience

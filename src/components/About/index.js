import AnimatedLetters from '../AnimatedLetters'

const About = () => (
  <section className="portfolio-section section-about" id="about" data-observe-section>
    <div className="section-inner">
      <div className="section-heading reveal" data-motion="fadeIn">
        <p className="eyebrow">01 / ABOUT</p>
        <h2><AnimatedLetters text="Curious by nature." /><br /><AnimatedLetters text="Practical by design." className="animated-accent" delay={12} /></h2>
      </div>
      <div className="about-content reveal" data-motion="fadeIn">
        <div className="about-intro">
          <p className="lead-copy">
            I’m a software developer with a foundation in Python and a growing
            focus on backend engineering. I build and maintain web features,
            REST APIs, and database-backed applications.
          </p>
        </div>
        <div className="about-detail">
          <p>At NiDik Webcon, I work on an AI-powered, multi-tenant SaaS product: developing CRUD APIs, working with MongoDB, testing and debugging endpoints, and improving application features.</p>
          <p>My BCA coursework in data structures, databases, web development, and operating systems informs how I approach everyday engineering problems. Outside of work, I explore Python projects in automation and machine learning.</p>
          <div className="about-facts">
            <div><span className="fact-value">Python <span>+</span> Java</span><span className="fact-label">CORE LANGUAGES</span></div>
            <div><span className="fact-value">Backend <span>+</span> Web</span><span className="fact-label">AREAS OF FOCUS</span></div>
            <div><span className="fact-value">Pune, India</span><span className="fact-label">BASED IN</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About

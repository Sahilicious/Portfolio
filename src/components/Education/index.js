import AnimatedLetters from '../AnimatedLetters'

const Education = () => (
  <section className="portfolio-section section-education" id="education" data-observe-section>
    <div className="section-inner education-layout">
      <div className="section-heading reveal" data-motion="fadeIn">
        <p className="eyebrow">05 / EDUCATION</p>
        <h2><AnimatedLetters text="Learning is" /><br /><AnimatedLetters text="part of the work." className="animated-accent" delay={12} /></h2>
      </div>
      <div className="education-list">
        <article className="education-entry reveal" data-motion="fadeInUp">
          <div className="education-date">CURRENT</div>
          <div>
            <p className="education-school">TGPCET · NAGPUR</p>
            <h3>Master of Computer Applications (MCA)</h3>
            <p className="education-meta">Pursuing · 2nd year, 3rd semester</p>
            <p className="education-coursework">CGPA 8.05</p>
          </div>
        </article>
        <article className="education-entry reveal" data-motion="fadeInUp">
          <div className="education-date">2022 — 2025</div>
          <div>
            <p className="education-school">SANDIP UNIVERSITY · NASHIK</p>
            <h3>Bachelor of Computer Applications</h3>
            <p className="education-meta">CGPA 8.06</p>
            <p className="education-coursework">Coursework: Data Structures, DBMS, Web Development, Operating Systems</p>
          </div>
        </article>
        <article className="education-entry reveal" data-motion="fadeInUp">
          <div className="education-date">2021</div>
          <div>
            <p className="education-school">ST. PAUL JR COLLEGE · NAGPUR</p>
            <h3>Higher Secondary (12th Grade)</h3>
            <p className="education-meta">CGPA 89.9%</p>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default Education

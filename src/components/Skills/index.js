import AnimatedLetters from '../AnimatedLetters'
import WordCloud from './wordcloud'

const groups = [
  { number: '01', title: 'Programming languages', skills: ['Python', 'Java', 'JavaScript', 'SQL'] },
  { number: '02', title: 'Frontend development', skills: ['React', 'HTML5', 'CSS3', 'JavaScript'] },
  { number: '03', title: 'Backend development', skills: ['Spring Framework', 'Spring Boot', 'Django', 'Flask', 'Node.js', 'REST APIs'] },
  { number: '04', title: 'Databases', skills: ['MongoDB', 'MySQL'] },
  { number: '05', title: 'AI / machine learning', skills: ['NumPy', 'Pandas', 'scikit-learn'] },
  { number: '06', title: 'Developer tools', skills: ['Git', 'GitHub', 'Postman', 'OpenAPI', 'Stoplight', 'IntelliJ IDEA', 'VS Code', 'Jupyter Notebook', 'Jira'] },
]

const Skills = () => (
  <section className="portfolio-section section-skills" id="skills" data-observe-section>
    <div className="section-inner">
      <div className="section-heading reveal" data-motion="fadeIn">
        <p className="eyebrow">04 / TECHNICAL SKILLS</p>
        <h2><AnimatedLetters text="Skills" /></h2>
        <p className="skills-intro">My toolkit spans programming, backend and web development, databases, machine learning, and the tools I use to build and ship software.</p>
      </div>
      <div className="skill-cloud-panel reveal" data-motion="fadeIn">
        <WordCloud />
        <details className="skill-catalog">
          <summary>Browse skills by category</summary>
          <div className="skill-catalog-grid">
            {groups.map((group) => (
              <div key={group.number}>
                <h3>{group.title}</h3>
                <p>{group.skills.join(' · ')}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  </section>
)

export default Skills

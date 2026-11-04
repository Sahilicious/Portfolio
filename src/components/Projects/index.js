import { useState } from 'react'

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import AnimatedLetters from '../AnimatedLetters'

const projects = [
  {
    number: '01',
    category: 'Backend Development',
    title: 'Zipopa services',
    type: 'Professional project · Nov 2025 — Present',
    description: 'Backend services for an AI-powered SaaS platform, including user access management, product catalog, and subscription lifecycle APIs.',
    details: [
      'Implemented RESTful APIs for access management and product catalog functionality.',
      'Integrated subscription activation, renewal, and cancellation flows.',
      'Used Spring Security and JWT-based authentication.',
    ],
    tags: ['Spring Boot', 'MongoDB', 'Spring Security', 'JWT', 'Postman', 'Stoplight'],
  },
  {
    number: '02',
    category: 'AI / Machine Learning',
    title: 'Drug Prescription System',
    type: 'AI / ML project · May 2024 — Present',
    description: 'A Python and Flask project that analyzes patient data, medical history, and prescription requirements to suggest treatment plans and dosage schedules.',
    details: [
      'Built a Flask interface for doctors to enter patient information and view AI-based suggestions.',
      'Applied machine-learning algorithms to support analysis of prescription requirements.',
    ],
    tags: ['Python', 'Flask', 'Pandas', 'scikit-learn', 'NumPy'],
  },
  {
    number: '03',
    category: 'Desktop Application',
    title: 'Project Jarvis',
    type: 'Personal project · Python',
    description: 'A voice-controlled desktop assistant that listens for a wake word and can handle browser, music, news, and AI-assisted commands.',
    details: [
      'Recognizes spoken commands and opens selected sites or music links.',
      'Uses text-to-speech for spoken responses and can fetch news headlines.',
    ],
    tags: ['Python', 'Speech Recognition', 'OpenAI API', 'Requests'],
    href: 'https://github.com/Sahilicious/Project_Jarvis',
  },
  {
    number: '04',
    category: 'Data Visualization',
    title: 'PN Tracker',
    type: 'Personal project · Python',
    description: 'A phone-number information tool that looks up region, carrier, and timezone data and plots an approximate location on a map.',
    details: [
      'Uses phone-number metadata and geocoding to estimate a location.',
      'Generates a map view with Folium.',
    ],
    tags: ['Python', 'phonenumbers', 'geopy', 'timezonefinder', 'Folium'],
    href: 'https://github.com/Sahilicious/Location_Tracker',
  },
]

const filters = ['All', ...new Set(projects.map((project) => project.category))]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
  <section className="portfolio-section section-projects" id="projects" data-observe-section>
    <div className="section-inner">
      <div className="project-intro">
        <div className="section-heading project-heading reveal" data-motion="fadeIn">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2><AnimatedLetters text="Projects in" /><br /><AnimatedLetters text="practice." className="animated-accent" delay={12} /></h2>
        </div>
        <p className="project-intro-copy">A selection of my software work across backend development, machine learning, desktop automation, and data tools.</p>
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              type="button"
              className={activeFilter === filter ? 'project-filter active' : 'project-filter'}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <a className="text-link" href="https://github.com/Sahilicious" target="_blank" rel="noreferrer">All repositories <span aria-hidden="true">↗</span></a>
        <p className="section-footnote">Professional project details are summarized from my resume. Source links are shown for public repositories only.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => {
          const isVisible = activeFilter === 'All' || project.category === activeFilter
          return (
          <article className={`project-card reveal${isVisible ? '' : ' project-card-filtered'}`} data-motion="fadeInUp" aria-hidden={!isVisible} key={project.number}>
            <div className="project-card-top">
              <span className="project-number">{project.number}</span>
              {project.href && (
                <a className="project-external" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
                </a>
              )}
            </div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <details className="project-details">
              <summary>Project details <span aria-hidden="true">＋</span></summary>
              <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </details>
            <div className="tag-list project-tags">
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Projects

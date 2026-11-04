import { useEffect, useRef } from 'react'

import TagCloud from 'TagCloud'

const texts = [
  'Python', 'Java', 'JavaScript', 'SQL', 'React', 'HTML5', 'CSS3',
  'Spring Boot', 'Spring Framework', 'Django', 'Flask', 'Node.js', 'REST APIs',
  'MongoDB', 'MySQL', 'NumPy', 'Pandas', 'scikit-learn', 'Git', 'GitHub',
  'Postman', 'OpenAPI', 'Stoplight', 'IntelliJ IDEA', 'VS Code', 'Jupyter', 'Jira',
]

const options = {
  radius: 240,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  direction: 135,
  keep: true,
}

const WordCloud = () => {
  const cloudRef = useRef(null)

  useEffect(() => {
    const cloud = cloudRef.current ? TagCloud(cloudRef.current, texts, options) : null
    return () => cloud?.destroy()
  }, [])

  return (
    <div className="skills-cloud" ref={cloudRef} aria-label="Interactive 3D skills cloud" />
  )
}

export default WordCloud

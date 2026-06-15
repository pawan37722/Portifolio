import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrapper">
        <p className="section-label">Skills</p>
        <h2 className="section-title">Tech Stack</h2>

        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-card">
              <div className="skill-card__title">{category}</div>
              <div className="skill-card__tags">
                {items.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

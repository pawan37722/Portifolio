import { useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { GithubIcon, ExternalIcon, ArrowRightIcon } from '../assets/icons'

export default function Projects() {
  const navigate = useNavigate()

  return (
    <section id="projects">
      <div className="section-wrapper">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.id}`)}
              aria-label={`View ${project.title} project details`}
            >
              {/* Project number */}
              <div className="project-card__num">
                PROJECT {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <div className="project-card__title">{project.title}</div>

              {/* Description */}
              <div className="project-card__desc">{project.desc}</div>

              {/* Tech stack */}
              <div className="project-card__tech">
                {project.tech.slice(0, 4).map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="tag">+{project.tech.length - 4}</span>
                )}
              </div>

              {/* Footer: fake buttons + view arrow */}
              <div className="project-card__footer">
                <div className="project-card__fake-btns">
                  {/* These are <span> elements — non-clickable, displayed only */}
                  <span className="fake-btn">
                    <GithubIcon size={13} /> GitHub
                  </span>
                  <span className="fake-btn">
                    <ExternalIcon size={12} /> Demo
                  </span>
                </div>
                <div className="project-card__view">
                  View <ArrowRightIcon size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

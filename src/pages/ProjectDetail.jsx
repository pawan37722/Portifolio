import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { GithubIcon, ExternalIcon, ArrowLeftIcon } from '../assets/icons'

export default function ProjectDetail() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const project  = projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div className="project-page">
        <div className="project-page__inner">
          <button className="project-page__back" onClick={() => navigate('/')}>
            <ArrowLeftIcon /> Back to Portfolio
          </button>
          <h1 className="project-page__title">Project not found.</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="project-page">
      <div className="project-page__inner">

        {/* Back button */}
        <button className="project-page__back" onClick={() => navigate('/')}>
          <ArrowLeftIcon /> Back to Portfolio
        </button>

        {/* Header */}
        <p className="section-label">
          Project {String(project.id).padStart(2, '0')}
        </p>
        <h1 className="project-page__title">{project.title}</h1>
        <p className="project-page__desc">{project.desc}</p>

        {/* ─── Tech stack (written out per project) ─── */}
        {project.id === 1 && (
          <div className="project-page__tech">
            <span className="tag">{project.tech[0]}</span>
            <span className="tag">{project.tech[1]}</span>
            <span className="tag">{project.tech[2]}</span>
          </div>
        )}
        {project.id === 2 && (
          <div className="project-page__tech">
            <span className="tag">{project.tech[0]}</span>
            <span className="tag">{project.tech[1]}</span>
            <span className="tag">{project.tech[2]}</span>
          </div>
        )}
        {project.id === 3 && (
          <div className="project-page__tech">
            <span className="tag">{project.tech[0]}</span>
            <span className="tag">{project.tech[1]}</span>
            <span className="tag">{project.tech[2]}</span>
          </div>
        )}
        {project.id === 4 && (
          <div className="project-page__tech">
            <span className="tag">{project.tech[0]}</span>
            <span className="tag">{project.tech[1]}</span>
          </div>
        )}

        {/* REAL buttons — only on this page */}
        <div className="project-page__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <GithubIcon size={17} /> View on GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <ExternalIcon size={15} /> Live Demo
          </a>
        </div>

        {/* ─────────────── Project 1 content ─────────────── */}
        {project.id === 1 && (
          <div className="project-page__content">
            <h3>Overview</h3>
            <p>Write the overview of project 1 here.</p>
            <h3>Features</h3>
            <ul>
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
            <h3>Challenges</h3>
            <p>What problems you solved in project 1.</p>
          </div>
        )}

        {/* ─────────────── Project 2 content ─────────────── */}
        {project.id === 2 && (
          <div className="project-page__content">
            <h3>Overview</h3>
            <p>Write the overview of project 2 here.</p>
            <h3>Features</h3>
            <ul>
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
            <h3>Challenges</h3>
            <p>What problems you solved in project 2.</p>
          </div>
        )}

        {/* ─────────────── Project 3 content ─────────────── */}
        {project.id === 3 && (
          <div className="project-page__content">
            <h3>Overview</h3>
            <p>Write the overview of project 3 here.</p>
            <h3>Features</h3>
            <ul>
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
            <h3>Challenges</h3>
            <p>What problems you solved in project 3.</p>
          </div>
        )}

        {/* ─────────────── Project 4 content ─────────────── */}
        {project.id === 4 && (
          <div className="project-page__content">
            <h3>Overview</h3>
            <p>Write the overview of project 4 here.</p>
            <h3>Features</h3>
            <ul>
              <li>Feature one</li>
              <li>Feature two</li>
              <li>Feature three</li>
            </ul>
            <h3>Challenges</h3>
            <p>What problems you solved in project 4.</p>
          </div>
        )}

      </div>
    </div>
  )
}
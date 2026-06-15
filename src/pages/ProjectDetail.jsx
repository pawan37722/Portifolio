import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/portfolioData'
import { GithubIcon, ExternalIcon, ArrowLeftIcon } from '../assets/icons'

/**
 * ProjectDetail — reached by clicking any project card on Home.
 *
 * GitHub and Live Demo buttons are REAL <a> links here.
 * Replace the placeholder <div> below with your own project content.
 */
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

        {/* Tech stack */}
        <div className="project-page__tech">
          {project.tech.map(t => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        {/* ✅ REAL buttons — only on this page */}
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

        {/* ─────────────────────────────────────────────────────────────────── */}
        {/* 👇 Replace this placeholder block with your own project content    */}
        {/* ─────────────────────────────────────────────────────────────────── */}
        <div className="project-page__placeholder">
          <div className="project-page__placeholder-icon">🚧</div>
          <div className="project-page__placeholder-title">
            Your content goes here — Project {project.id}
          </div>
          <p className="project-page__placeholder-text">
            Add screenshots, videos, feature breakdowns, challenges you solved,
            or anything you want to showcase about{' '}
            <strong style={{ color: 'var(--accent2)' }}>{project.title}</strong>.
          </p>
        </div>
        {/* ─────────────────────────────────────────────────────────────────── */}

      </div>
    </div>
  )
}

import { GithubIcon, ExternalIcon } from '../assets/icons'

export const projects = [
  {
    title: 'AI coding Assistant',
    page: './htmlpage/ai.html',
    github: 'https://github.com/pawan37722/AI-Based-Student-Performance-Tracker-Ranking-System',
    desc: 'If your coding assistant like cursor Token gets exosted generate a free API Key with groq and continue you coding',
    tech: ['JavaScript', 'Node.js', 'Groq'],
  },
  {
    title: 'Secure Jio Tag Application',
    page: './htmlpage/jio-tag.html',
    github: 'https://github.com/pawan37722/-Secure-Media-Based-Project-Verification-System',
    demo: 'https://media-metadata.vercel.app/',
    desc: 'Create a URL of your Photo/Video with uneditable date time and location',
    tech: ['React', 'Node.js', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Automated API Testing Tool',
    page: './htmlpage/api.html',
    github: 'https://github.com/pawan37722/Improved-Version-Of-Postman-API-Testing-Automation',
    demo: 'https://api-testing-automation.vercel.app/',
    desc: 'Cheack Multiple API Request and automatically verify the response and the expected output',
    tech: ['NodeJS', 'React', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Memory capbility Testing',
    page: './htmlpage/memory.html',
    github: 'https://github.com/pawan37722/Memory-Checking-Game',
    demo: 'https://memory-checking-game.vercel.app/',
    desc: 'chech you remembering capability by playing a simple game and get your score',
    tech: ['NodeJS', 'JWT', 'React', 'HTML', 'CSS', 'JavaScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrapper">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <a
              className="project-card"
              key={project.title}
              href={project.page}
              aria-label={`Open ${project.title} page`}
            >
              <div className="project-card__header">
                <div className="project-card__title">{project.title}</div>

                <div className="project-card__fake-btns">
                  {project.github && (
                    <span className="fake-btn">
                      <GithubIcon size={13} /> GitHub
                    </span>
                  )}
                  {project.demo && (
                    <span className="fake-btn">
                      <ExternalIcon size={12} /> Demo
                    </span>
                  )}
                </div>
              </div>

              <div className="project-card__desc">{project.desc}</div>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
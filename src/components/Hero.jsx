import { useNavigate } from 'react-router-dom'
import { profile, social } from '../data/portfolioData'
import { GithubIcon, LinkedInIcon, LeetcodeIcon } from '../assets/icons'

export default function Hero() {
  const navigate = useNavigate()

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__glow" />

      <div className="hero__inner">
        {/* Avatar */}
        <div className="hero__avatar-ring">
          <img
            src={profile.photo}
            alt={profile.name}
            className="hero__avatar"
          />
        </div>

        {/* Status badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="hero__name">{profile.name}</h1>

        {/* Tagline */}
        <p className="hero__tagline">
          Full-stack Developer &middot; Problem Solver &middot; DSA Enthusiast
        </p>

        {/* Social links */}
        <div className="hero__socials">
          <a href={social.github} target="_blank" rel="noreferrer" className="social-btn">
            <GithubIcon size={18} /> GitHub
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer" className="social-btn">
            <LinkedInIcon size={18} /> LinkedIn
          </a>
          <a href={social.leetcode} target="_blank" rel="noreferrer" className="social-btn">
            <LeetcodeIcon size={18} /> LeetCode
          </a>
        </div>

        {/* CTA */}
        <div className="hero__cta">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

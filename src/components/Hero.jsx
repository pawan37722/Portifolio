import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { profile, social } from '../data/portfolioData'
import { GithubIcon, LinkedInIcon, LeetcodeIcon } from '../assets/icons'

export default function Hero() {
  const navigate = useNavigate()
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    if (!zoomed) return
    const onKey = (e) => e.key === 'Escape' && setZoomed(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoomed])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__glow" />

      <div className="hero__inner">
        {/* Avatar */}
        <div
          className="hero__avatar-ring"
          onClick={() => setZoomed(true)}
          role="button"
          tabIndex={0}
          aria-label="View profile photo larger"
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setZoomed(true)}
        >
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

      {zoomed && (
        <div className="avatar-modal" onClick={() => setZoomed(false)}>
          <button type="button" className="avatar-modal__close" aria-label="Close photo">×</button>
          <img src={profile.photo} alt={profile.name} className="avatar-modal__img" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

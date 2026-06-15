import { profile, leetcodeStats } from '../data/portfolioData'
import { EmailIcon, PhoneIcon } from '../assets/icons'

const STATS = [
  { num: `${leetcodeStats.problems}`, label: 'LeetCode Problems' },
  { num: leetcodeStats.rating,        label: 'Contest Rating'    },
  { num: '4+',                        label: 'Projects Built'    },
  { num: '2',                         label: 'Hackathon Awards'  },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <p className="section-label">About</p>
        <h2 className="section-title">Who I Am</h2>

        <div className="about__grid">
          <p className="about__text">
            I'm a passionate full-stack developer with a strong foundation in Data
            Structures and Algorithms. I love building real-world applications that solve
            meaningful problems — from location-aware apps to developer tooling.
            I'm always looking for opportunities to grow, collaborate, and ship products
            that make a difference.
          </p>

          <div className="about__contact-list">
            <div className="about__contact-item">
              <EmailIcon />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="about__contact-item">
              <PhoneIcon />
              <span>{profile.phone}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          {STATS.map(({ num, label }) => (
            <div key={label} className="stat-card">
              <div className="stat-card__num">{num}</div>
              <div className="stat-card__label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

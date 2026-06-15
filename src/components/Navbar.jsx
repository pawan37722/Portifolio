import { Link, useNavigate, useLocation } from 'react-router-dom'
import { profile } from '../data/portfolioData'

const NAV_LINKS = [
  { label: 'About',    hash: '#about'    },
  { label: 'Skills',   hash: '#skills'   },
  { label: 'Projects', hash: '#projects' },
  { label: 'Awards',   hash: '#awards'   },
  { label: 'Contact',  hash: '#contact'  },
]

export default function Navbar() {
  const navigate  = useNavigate()
  const location  = useLocation()
  const isHome    = location.pathname === '/'

  const handleNav = (hash) => {
    if (isHome) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + hash)
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__brand">
        {profile.name.split(' ').map(w => w[0]).join('')}
      </Link>

      <ul className="navbar__links">
        {NAV_LINKS.map(({ label, hash }) => (
          <li key={label}>
            <a onClick={() => handleNav(hash)} style={{ cursor: 'pointer' }}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

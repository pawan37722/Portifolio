import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {profile.name} · Built with React + Vite
    </footer>
  )
}

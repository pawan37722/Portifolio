import { Routes, Route } from 'react-router-dom'
import Navbar        from './components/Navbar'
import Home          from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import '../src/styles/components.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/project/:id"  element={<ProjectDetail />} />
        {/* 404 fallback */}
        <Route path="*" element={
          <div style={{ textAlign:'center', padding:'6rem 2rem', color:'var(--muted)' }}>
            <h2 style={{ fontFamily:'var(--font-display)', color:'var(--text)', fontSize:'2rem', marginBottom:'1rem' }}>
              Page not found
            </h2>
            <a href="/" style={{ color:'var(--accent2)' }}>← Go home</a>
          </div>
        } />
      </Routes>
    </>
  )
}

// All data is read from .env (VITE_ prefix required for Vite)
// Edit .env to update your portfolio content without touching components

const env = import.meta.env

// ── Profile ──────────────────────────────────────────────────────────────────
export const profile = {
  name:  env.VITE_PROFILE_NAME  || 'Your Name',
  email: env.VITE_PROFILE_EMAIL || 'email@example.com',
  phone: env.VITE_PROFILE_PHONE || '',
  photo: env.VITE_PROFILE_PHOTO || '',
}

// ── Social ────────────────────────────────────────────────────────────────────
export const social = {
  linkedin: env.VITE_LINKEDIN_URL || '#',
  github:   env.VITE_GITHUB_URL   || '#',
  leetcode: env.VITE_LEETCODE_URL || '#',
}

// ── LeetCode Stats ────────────────────────────────────────────────────────────
export const leetcodeStats = {
  problems: env.VITE_LEETCODE_PROBLEMS || '0',
  rating:   env.VITE_LEETCODE_RATING   || '0',
}

// ── Projects ──────────────────────────────────────────────────────────────────
const parseProject = (n) => ({
  id:        n,
  title:     env[`VITE_PROJECT${n}_TITLE`]      || `Project ${n}`,
  fullTitle: env[`VITE_PROJECT${n}_FULL_TITLE`]  || `Project ${n}`,
  github:    env[`VITE_PROJECT${n}_GITHUB`]      || '#',
  demo:      env[`VITE_PROJECT${n}_DEMO`]        || '#',
  desc:      env[`VITE_PROJECT${n}_DESC`]        || '',
  tech:      (env[`VITE_PROJECT${n}_TECH`] || '').split(',').map(t => t.trim()).filter(Boolean),
})

export const projects = [1, 2, 3, 4].map(parseProject)

// ── Awards ────────────────────────────────────────────────────────────────────
const parseAward = (n) => ({
  id:       n,
  title:    env[`VITE_AWARD${n}_TITLE`]    || `Award ${n}`,
  org:      env[`VITE_AWARD${n}_ORG`]      || '',
  linkedin: env[`VITE_AWARD${n}_LINKEDIN`] || '#',
  photos:   [1, 2, 3, 4]
    .map(i => env[`VITE_AWARD${n}_PHOTO${i}`])
    .filter(Boolean),
})

export const awards = [1, 2].map(parseAward)

// ── Skills ────────────────────────────────────────────────────────────────────
export const skills = {
  Languages:       ['C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  Backend:         ['Node.js', 'Express.js', 'RESTful APIs'],
  Frontend:        ['React.js', 'EJS'],
  Databases:       ['MongoDB', 'MySQL', 'NeonDB (PostgreSQL)'],
  Tools:           ['Git', 'GitHub', 'VS Code', 'Postman'],
  'CS Fundamentals': ['DSA', 'OOP', 'DBMS', 'OS'],
}

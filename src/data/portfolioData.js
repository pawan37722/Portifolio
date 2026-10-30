const env = import.meta.env

// Profile 
export const profile = {
  name:  'Pawan Kumar',
  email: 'kumarpawan37722@gmail.com',
  phone: '9523307039',
  photo: 'https://drive.google.com/thumbnail?id=1bswgSajkISc4p6RK4DO4McNtRvo_u7-a&sz=w1000'
}

//Social
export const social = {
  linkedin: 'https://www.linkedin.com/in/pawan-kumar-542901263/',
  github:   'https://github.com/pawan37722',
  leetcode: 'https://leetcode.com/u/P_a_w_a_n_K_r/',
}
export const leetcodeStats = {
  problems: env.VITE_LEETCODE_PROBLEMS || '1260+',
  rating:   env.VITE_LEETCODE_RATING   || '1846',
}
export const projects = [
  {
    id: 1,
    title:     env.VITE_PROJECT1_TITLE      || 'Project 1',
    fullTitle: env.VITE_PROJECT1_FULL_TITLE || 'Project 1',
    github:    env.VITE_PROJECT1_GITHUB     || '#',
    demo:      env.VITE_PROJECT1_DEMO       || '#',
    desc:      env.VITE_PROJECT1_DESC       || '',
    tech:      env.VITE_PROJECT1_TECH ? env.VITE_PROJECT1_TECH.trim().split(/\s*,\s*/) : [],
  },
  {
    id: 2,
    title:     env.VITE_PROJECT2_TITLE      || 'Project 2',
    fullTitle: env.VITE_PROJECT2_FULL_TITLE || 'Project 2',
    github:    env.VITE_PROJECT2_GITHUB     || '#',
    demo:      env.VITE_PROJECT2_DEMO       || '#',
    desc:      env.VITE_PROJECT2_DESC       || '',
    tech:      env.VITE_PROJECT2_TECH ? env.VITE_PROJECT2_TECH.trim().split(/\s*,\s*/) : [],
  },
  {
    id: 3,
    title:     env.VITE_PROJECT3_TITLE      || 'Project 3',
    fullTitle: env.VITE_PROJECT3_FULL_TITLE || 'Project 3',
    github:    env.VITE_PROJECT3_GITHUB     || '#',
    demo:      env.VITE_PROJECT3_DEMO       || '#',
    desc:      env.VITE_PROJECT3_DESC       || '',
    tech:      env.VITE_PROJECT3_TECH ? env.VITE_PROJECT3_TECH.trim().split(/\s*,\s*/) : [],
  },
  {
    id: 4,
    title:     env.VITE_PROJECT4_TITLE      || 'Project 4',
    fullTitle: env.VITE_PROJECT4_FULL_TITLE || 'Project 4',
    github:    env.VITE_PROJECT4_GITHUB     || '#',
    demo:      env.VITE_PROJECT4_DEMO       || '#',
    desc:      env.VITE_PROJECT4_DESC       || '',
    tech:      env.VITE_PROJECT4_TECH ? env.VITE_PROJECT4_TECH.trim().split(/\s*,\s*/) : [],
  },
]


export const awards = [
  {
    id: 1,
    title: 'Rank 1 — Bug-Hunt CodeCrackers, CGC Jhanjeri',
    org: '',
    linkedin:
      'https://www.linkedin.com/posts/pawan-kumar-542901263_cgcuniversity-dsa-ugcPost-7384301018920030208-SPfM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC9ZcIBqJygDBLVQGFhbaQqDoL2KXbh4K8',
    photos: [
      'https://drive.google.com/thumbnail?id=1s1cYRURBM6rI_RLDOVo0s1DMY-ivOtuK&sz=w1000',
      'https://drive.google.com/thumbnail?id=1urxR6jgMKYH60_HRCpLuyqk-Kp8zkqP_&sz=w1000',
      'https://drive.google.com/thumbnail?id=1d4m3Lo9jmuhZ_ZHqarTNxhZvwVyLgt1u&sz=w1000',
      'https://drive.google.com/thumbnail?id=1SwqfDx-ZTo_BAmn0dr5AXzfDNYkSKL9s&sz=w1000',
    ],
  },

  {
    id: 2,
    title: '2nd Place — CodeKatana 3.0, CGC Jhanjeri (GeeksForGeeks)',
    org: '',
    linkedin:
      'https://www.linkedin.com/posts/pawan-kumar-542901263_excited-to-announce-that-i-achieved-2nd-prize-ugcPost-7395832777637695489-BX2b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEC9ZcIBqJygDBLVQGFhbaQqDoL2KXbh4K8',
    photos: [
      'https://drive.google.com/thumbnail?id=133bD4wQA7kGeyJT_lHGWeqdU6brmsyZz&sz=w1000',
      'https://drive.google.com/uc?export=view&id=1_rMwmvbxblCeJPo7IL6RpLfGyyZ71inV',
      'http://res.cloudinary.com/dtyfcsgaw/image/upload/code_k_5_w_mh0c3s.jpg',
      'https://www.google.com/imgres?q=sunny&imgurl=https%3A%2F%2Fakm-img-a-in.tosshub.com%2Findiatoday%2Fimages%2Fstory%2F201403%2Fsunnyleone_story_650_030614102750.jpg&imgrefurl=https%3A%2F%2Fwww.indiatoday.in%2Fmovies%2Fbollywood%2Fstory%2Fsunny-leone-ekta-kapoor-ragini-mms-2-television-offers-honey-singh-183865-2014-03-06&docid=QPs2nSQ4pVv2BM&tbnid=vuWCNiFyVytLiM&vet=12ahUKEwjNpr3HmOuUAxUl5DkIHaw2CRAQnPAOegQIFxAB..i&w=650&h=737&hcb=2&ved=2ahUKEwjNpr3HmOuUAxUl5DkIHaw2CRAQnPAOegQIFxAB',
    ],
  },
]

// ── Skills ────────────────────────────────────────────────────────────────────
export const skills = {
  Languages: ['C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],

  Backend: ['Node.js', 'Express.js', 'RESTful APIs'],

  Frontend: ['React.js', 'EJS'],

  Databases: ['MongoDB', 'MySQL', 'NeonDB (PostgreSQL)'],

  'AI / ML': [
    'ML Algorithms',
    'RAG',
    'LangChain.js',
    'LLM'
  ],

  Tools: ['Git', 'GitHub', 'VS Code', 'Postman'],

  'CS Fundamentals': ['DSA', 'OOP', 'DBMS', 'OS'],
}
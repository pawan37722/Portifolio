import useScrollToHash from '../hooks/useScrollToHash'
import Hero     from '../components/Hero'
import About    from '../components/About'
import Skills   from '../components/Skills'
import Projects from '../components/Projects'
import Awards   from '../components/Awards'
import LeetCode from '../components/LeetCode'
import Contact  from '../components/Contact'
import Footer   from '../components/Footer'

export default function Home() {
  useScrollToHash()

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <LeetCode />
      <Contact />
      <Footer />
    </>
  )
}

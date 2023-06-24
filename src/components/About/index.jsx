import './About.css'
import Timeline from '../TimeLine'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 4000)
  }, [])
  return (
    <section id='about'>
      <h1>
        {/* Acerca de mi... */}
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'Acerca de mi ...'.split('')}
          idx={5}
        />
      </h1>
      <div className='about_container'>
        <Timeline />
      </div>
    </section>
  )
}

export default About

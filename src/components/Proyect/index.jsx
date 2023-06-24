import './Proyect.css'
import ProjectCard from './ProyectCard'
import AnimatedLetters from '../AnimatedLetters'

import { projects } from '../../constans'
import { useEffect, useState } from 'react'

const Proyect = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 4000)
  }, [])

  return (
    <section id='projects'>
      <h2>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'Estos son algunos de mis proyectos ...'.split('')}
          idx={5}
        />
      </h2>
      <div className='container-projects'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            sourceCodeLink={project.source_code_link}
            sourceAppLink={project.app_link}
          />
        ))}
      </div>
      <button>
        <a
          href='https://github.com/sergiogenes'
          target='_blank'
          rel='noreferrer'
        >
          Show all
          <i className='fas fa-chevron-right' />
        </a>
      </button>
    </section>
  )
}

export default Proyect

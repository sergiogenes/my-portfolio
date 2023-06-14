import '../styles/Proyect.css'
import ProjectCard from '../commons/ProyectCard'
import { projects } from '../constans'

const Proyect = () => {
  return (
    <section id='projects'>
      <h2>Estos son algunos de mis proyectos...</h2>
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

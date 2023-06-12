import '../styles/Proyect.css'
import Card from '../commons/Card'
import ProjectCard from '../commons/ProyectCard'

const Proyect = () => {
  return (
    <section id='projects'>
      <h2>These are some of my projects</h2>
      <div className='container-projects'>
        <Card
          linkApp='https://genuine-fenglisu-f363db.netlify.app/'
          urlImagen='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_1.png?raw=true'
          description='Use CSS Transforms by Building a Penguin'
        />
        <ProjectCard
          name='Pinguin'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum deleniti veniam deserunt non natus corrupti nesciunt consequuntur! Nemo illo recusandae laboriosam, doloremque adipisci maiores explicabo numquam hic laborum temporibus quaerat pariatur, minima sequi voluptas ullam optio excepturi sed quia, officia perferendis quis illum qui doloribus! Earum atque illum aut ea!'
          tags={[{ name: 'HTML' }, { name: 'CSS' }]}
          image='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_1.png?raw=true'
          sourceCodeLink='https://genuine-fenglisu-f363db.netlify.app/'
        />
        <a
          className='project-tile'
          href='https://genuine-fenglisu-f363db.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <figure>
            <img
              src='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_1.png?raw=true'
              alt='Imaje of the a proyect N°1'
            />
            <figcaption>Use CSS Transforms by Building a Penguin</figcaption>
          </figure>
        </a>
        <a
          className='project-tile'
          href='https://jade-monstera-73b432.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          <figure>
            <img
              src='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_2.png?raw=true'
              alt='Imaje of the a proyect N°2'
            />
            <figcaption>Product Landing Page</figcaption>
          </figure>
        </a>
        <a
          className='project-tile'
          href='https://frolicking-valkyrie-afa707.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          <figure>
            <img
              src='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_3.png?raw=true'
              alt='Imaje of the a proyect N°3'
            />
            <figcaption>Using CSS Grid to build a web page.</figcaption>
          </figure>
        </a>
        <a
          className='project-tile'
          href='https://sparkly-brigadeiros-1e6a06.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          <figure>
            <img
              src='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_4.png?raw=true'
              alt='Imaje of the a proyect N°4'
            />
            <figcaption>
              Using CSS variables to build a city skyline.
            </figcaption>
          </figure>
        </a>
        <a
          className='project-tile'
          href='https://superb-brigadeiros-043459.netlify.app'
          target='_blank'
          rel='noreferrer'
        >
          <figure>
            <img
              src='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_5.png?raw=true'
              alt='Imaje of the a proyect N°5'
            />
            <figcaption>
              Using CSS pseudo selectors to build a balance sheet.
            </figcaption>
          </figure>
        </a>
        <a
          className='project-tile'
          href='#welcome-section'
        >
          <figure>
            <img
              src='https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_6.png?raw=true'
              alt='Imaje of the a proyect N°6'
            />
            <figcaption>building a portfolio.</figcaption>
          </figure>
        </a>
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

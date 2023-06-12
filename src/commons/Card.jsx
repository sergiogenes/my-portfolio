import '../styles/Card.css'

const Card = ({ linkApp, urlImagen, description }) => {
  return (
    <>
      <a
        className='project-title'
        href={linkApp}
        target='_blank'
        rel='noreferrer'
      >
        <figure>
          <img
            src={urlImagen}
            alt='Imaje of the a proyect'
          />
          <figcaption>{description}</figcaption>
        </figure>
      </a>
    </>
  )
}

export default Card

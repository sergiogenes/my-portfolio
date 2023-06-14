import { useState } from 'react'
import '../styles/ProyectCard.css'
import { IconLink } from '@tabler/icons-react'

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  sourceAppLink
}) => {
  const [moreText, setMoreText] = useState(false)

  const handlerMoreText = (e) => {
    console.log('click')
    return setMoreText(!moreText)
  }
  console.log('moreText', moreText, handlerMoreText)
  return (
    <div className='projectCardContainer'>
      <figure>
        <img
          src={image}
          alt='project_image'
        />

        <div className='clickContainer'>
          <div onClick={() => window.open(sourceCodeLink, '_blank')}>
            <img
              src='github.png'
              alt='source code'
            />
          </div>
          <div onClick={() => window.open(sourceAppLink, '_blank')}>
            <IconLink />
          </div>
        </div>
        <figcaption>
          <h3>{name}</h3>
          <p>
            {description.length > 300 && !moreText
              ? description.slice(0, 300).concat('...')
              : description}
          </p>
          <button onClick={handlerMoreText}>
            {moreText ? 'Mostrar menos...' : 'Mostrar mas...'}
          </button>
          <div className='tagsContainer'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`}>#{tag.name}</p>
            ))}
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default ProjectCard

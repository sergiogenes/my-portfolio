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
  return (
    <div className='projectCardContainer'>
      <figure className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='clickContainer absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(sourceCodeLink, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src='github.png'
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <div
            onClick={() => window.open(sourceAppLink, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <IconLink />
          </div>
        </div>
        <figcaption className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <div className=' tagsContainer mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default ProjectCard

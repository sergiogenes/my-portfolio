import '../styles/Timeline.css'
import TimeLineCard from '../commons/TimeLineCard'
import { aboutMe } from '../constans'

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='outer'>
        {aboutMe.map((text, index) => (
          <TimeLineCard
            key={index}
            title={text.title}
            description={text.content}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline

import '../styles/TimeLineCard.css'

const TimeLineCard = ({ title, description }) => {
  return (
    <div className='timeLineCard'>
      <div className='info'>
        <h3 className='title'>{title}</h3>
        <p>{description} </p>
      </div>
    </div>
  )
}

export default TimeLineCard

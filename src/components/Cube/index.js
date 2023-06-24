import './index.scss'
import { reactjs, nodejs, redux, html, css, git } from '../../assets'

const Cube = () => {
  return (
    <div className='stage-cube-cont'>
      <div className='cubespinner'>
        <div className='face1'>
          <img
            src={reactjs}
            alt='icono de react.js'
          />
        </div>
        <div className='face2'>
          <img
            src={nodejs}
            alt='icono de react.js'
          />
        </div>
        <div className='face3'>
          <img
            src={redux}
            alt='icono de react.js'
          />
        </div>
        <div className='face4'>
          <img
            src={html}
            alt='icono de react.js'
          />
        </div>
        <div className='face5'>
          <img
            src={css}
            alt='icono de react.js'
          />
        </div>
        <div className='face6'>
          <img
            src={git}
            alt='icono de react.js'
          />
        </div>
      </div>
    </div>
  )
}

export default Cube

import './SubHeader.scss'
import { Link } from 'react-router-dom'

export default function SubHeader({ title, desc }) {
  return (
    <>
      <div id="sub-header">
        <div className="limiter">

          <div data-aos="fade-left" className="title-container">
            <Link to=".." relative='path'>
              <button id='back-button'>
                <img src="https://www.svgrepo.com/show/78884/back-arrow.svg" alt="" />
              </button>
            </Link>

            <div>
              <h1>{title}</h1>
              <hr />
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
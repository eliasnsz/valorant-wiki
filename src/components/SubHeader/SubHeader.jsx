import './SubHeader.scss'

export default function SubHeader({ title, desc }) {
  return (
    <>
      <div id="sub-header">
        <div className="limiter">
          <div className="title-container">
            <h1>{title}</h1>
            <hr />
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}
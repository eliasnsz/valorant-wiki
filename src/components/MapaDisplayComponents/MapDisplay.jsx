import './MapDisplay.scss'

export default function MapDisplay({ bgImage, mapImage }) {
  return (
    <>
      <div id="map-display" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="limiter">
          <div className="image-map">
            {mapImage && <img src={mapImage} alt="" />}
          </div>
        </div>
      </div>
    </>
  )
}
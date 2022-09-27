import './MapDisplay.scss'

export default function MapDisplay({ bgImage, mapImage }) {
  return (
    <>
      <div id="map-display" className='main-flex' style={{ backgroundImage: `url(${bgImage})` }}>
        {mapImage && <img src={mapImage} alt="" />}
      </div>
    </>
  )
}
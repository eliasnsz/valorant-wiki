import './MapDisplay.scss'

export default function MapDisplay({ bgImage, mapImage }) {
  return (
    <>
      <div id="map-display" className='main-flex' style={{ backgroundImage: `url(${bgImage})` }}>
        {mapImage && <img data-aos="zoom-in" src={mapImage} alt="" />}
      </div>
    </>
  )
}
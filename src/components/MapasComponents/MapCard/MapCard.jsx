import './MapCard.scss'

export default function MapCard({ mapName, coords, background}) {
  return (
    <>
      <div id="map-card" style={{ backgroundImage: `url(${background})` }}>
        <div className="text-container">
          <div>
            <h2>{mapName}</h2>
            <p>{coords}</p>
          </div>
        </div>
      </div>
    </>
  )
}
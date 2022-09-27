import './MapsList.scss'
import MapCard from '../MapCard/MapCard'
import useFetch from '../../../hooks/useFetch'

export default function MapsList() {

  const { data, isFetching } = useFetch("https://valorant-api.com/v1/maps/")
  

  return (
    <>
      <div id="maps-list">
        <div className="limiter">
          <div className="grid-container">
            {!isFetching && data !== null && data["data"].map(map => {
              return (
                <MapCard 
                mapName={ map.displayName } 
                coords={ map.coordinates }
                background={ `${map.splash}` }
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
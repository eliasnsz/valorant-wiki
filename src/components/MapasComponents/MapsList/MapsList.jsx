import './MapsList.scss'
import MapCard from '../MapCard/MapCard'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function MapsList() {

  const { data, isFetching } = useFetch("https://valorant-api.com/v1/maps/")
  

  return (
    <>
      <div id="maps-list">
        <div className="limiter">
          <div className="grid-container">
            {!isFetching && data !== null && data["data"].map((map, i) => {
              return (
                <Link data-aos="zoom-in" 
                data-aos-duration="500" 
                data-aos-delay={100 + i*100} d
                ata-aos-easing="ease-out" key={i} to={`/mapas/${ map.uuid }`}>
                  <MapCard 
                  mapName={ map.displayName }
                  coords={ map.coordinates }
                  background={ `${map.splash}` }
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
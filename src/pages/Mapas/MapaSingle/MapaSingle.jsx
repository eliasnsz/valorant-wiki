import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import './MapaSingle.scss'

export default function MapaSingle () {

  const { uuid } = useParams()

  const { data: mapList, isFetching} = useFetch("https://valorant-api.com/v1/maps/?language=pt-BR")

  
  const filteredMap = mapList !== null && mapList.reduce((acc, item) => {
    if (item.uuid === uuid) {
      return item
    }
    return acc
  }, {})

  return (
    <>
      { !isFetching && filteredMap !== null && 
      <div id="mapa-single" className='main-container'>
        <div data-aos="fade-right" className="bg-container" style={{ backgroundImage: `url(${filteredMap.splash})` }} ></div>
          
          <div className="card-container">
            <div data-aos="fade-left" className="card">

              <div className="img-container" style={{ backgroundImage: `url(${filteredMap.splash})` }} ></div>

              <div className="text-container">
                <h2>{filteredMap.displayName}</h2>
                <p>{filteredMap.coordinates}</p>
              </div>

              <div className="map-image-container"  style={{ backgroundImage: `url(${filteredMap.displayIcon})`}} ></div>
              
          </div>
        
        </div>
      </div>}
    </>
  )
}
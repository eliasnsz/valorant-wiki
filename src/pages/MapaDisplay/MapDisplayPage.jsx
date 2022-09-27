import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import MapDisplay from "../../components/MapaDisplayComponents/MapDisplay";

export default function MapaDisplayPage() {

  const { uuid } = useParams()
  const { data, isFetching } = useFetch(`https://valorant-api.com/v1/maps/${uuid}`)

  return (
    !isFetching && data !== null && (
    <div className="main-flex">
      <Header/>
      <SubHeader 
        title={ data["data"].displayName } 
        desc={ data["data"].coordinates }/>
      <MapDisplay bgImage={ data["data"].splash } mapImage={ data["data"].displayIcon }/>
      <Footer/>
    </div>
    )
  )
}
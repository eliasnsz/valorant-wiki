import { useEffect } from "react";


import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MapsList from "../../components/MapasComponents/MapsList/MapsList";
import SubHeader from "../../components/SubHeader/SubHeader";

export default function Mapas() {

  useEffect(() => window.scrollTo(0, 0))

  return (
    <div className="main-flex">
      <SubHeader title={"Mapas"} desc={"Explore os mapas disponíveis em Valorant."}/>
      <MapsList />
    </div>
  )
}
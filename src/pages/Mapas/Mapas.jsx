import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MapsList from "../../components/MapasComponents/MapsList/MapsList";
import SubHeader from "../../components/MapasComponents/SubHeader/SubHeader";

export default function Mapas() {
  return (
    <div className="main-flex">
      <Header/>
      <SubHeader/>
      <MapsList />
      <Footer/>
    </div>
  )
}
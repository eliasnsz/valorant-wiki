import './Features.scss'
import FeatureCard from '../FeatureCard/FeatureCard'

import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <>
      <section id='features'>
        <div className="limiter">
          <div data-aos="fade-right" className="title-container">
            <h1>
              Explore as seções disponíveis
            </h1>
            <hr />
          </div>
          <div className="grid-container">
            <Link to="/agentes">
              <FeatureCard
                img={"https://img.icons8.com/material-sharp/344/conference-call.png"}
                title={"Agentes"}
                desc={"Conheça os agentes e suas habilidades."}
                delay={"100"}
              />
            </Link>

            <Link to="/mapas">
              <FeatureCard
                img={"https://cdn-icons-png.flaticon.com/512/535/535263.png"}
                title={"Mapas"}
                desc={"Conheça os mapas de Valorant."}
                delay={"150"}
              />
            </Link>

            <Link to="/armas">
              <FeatureCard
                img={"https://cdn-icons-png.flaticon.com/512/486/486256.png"}
                title={"Armas"}
                desc={"Conheça todos os armamentos de Valorant."}
                delay={"200"}
              />
            </Link>

            <Link to="/skins">
              <FeatureCard
                img={"https://cdn-icons-png.flaticon.com/512/5357/5357746.png"}
                title={"Skins"}
                desc={"Conheça as diferentes aparências das armas."}
                delay={"250"}
              />
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}
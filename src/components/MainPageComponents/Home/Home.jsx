import './Home.scss'

export default function Home() {
  return (
    <>
      <section id='home'>
        <div className="limiter">
          <div className="flex-container">
            <div data-aos="fade-up" className="title-container">
              <h1>
                Bem-vindo ao Valorant Wiki
              </h1>
              <p>
                O melhor lugar para aprender sobre o mundo de Valorant!
              </p>
              <button onClick={() => window.location = "#features"}>
                Saiba mais
              </button>
            </div>
            <div data-aos="zoom-in">
              <img id='logo-animate' src="https://i.imgur.com/K2pnppg.png" alt="" />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f3f3" fillRule="1" d="M0,288L48,288C96,288,192,288,288,272C384,256,480,224,576,224C672,224,768,256,864,272C960,288,1056,288,1152,266.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>
      </section>
    </>
  )
} 
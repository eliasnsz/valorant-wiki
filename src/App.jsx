import './App.scss'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Mapas from './pages/Mapas/Mapas'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MapaSingle from './pages/Mapas/MapaSingle/MapaSingle'

function App() {

  return (
    <div className="App">
      <Router>
        <div className='main-container'>
          <Header/>
            <div className="body-container">
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/mapas' element={<Mapas />} />
                <Route path='/mapas/:uuid' element={<MapaSingle />} />
              </Routes>
            </div>
          <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App

import './App.scss'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Mapas from './pages/Mapas/Mapas'
import MapaDisplayPage from './pages/MapaDisplay/MapDisplayPage'

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/mapas' element={<Mapas />} />
          <Route path='/mapas/:uuid' element={<MapaDisplayPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

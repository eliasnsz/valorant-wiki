import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Mapas from './pages/Mapas/Mapas'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/mapas' element={<Mapas />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

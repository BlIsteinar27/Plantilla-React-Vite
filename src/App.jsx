
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="*" element={<Inicio/>} />
            <Route path="/" element={<Inicio/>} />
            <Route path="/inicio" element={<Inicio/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

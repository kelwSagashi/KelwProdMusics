import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import CoverSection from './Components/Covers/CoverSection'
import HeroSection from './Components/Hero/HeroSection'
import NavBar from './Components/NavBar/NavBar'
import ReleaseSection from './Components/Release/ReleaseSection'
import Musics from './Pages/Musics'
import Music from './Pages/Music'

function App() {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Musicas' element={<Musics/>}/>
        <Route path='/Music/:id' element={<Music/>}/>
      </Routes>
    </>
  )
}

function Home() {
  return (
    <>
      <HeroSection />
      <ReleaseSection />
      <CoverSection />
    </>
  )
}
export default App
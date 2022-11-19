import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Kegiatan from './pages/Kegiatan'
import DetailKegiatan from './pages/DetailKegiatan'
import Form from './pages/Form'
import {Routes, Route, Link} from "react-router-dom"
import KegiatanActive from './pages/KegiatanActive'
import ListPendaftaran from './pages/ListPendaftaran'
import DetailKegiatanList from './pages/DetailKegiatanList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Kegiatan/>}>
        <Route path='kegiatan-active' element={<KegiatanActive/>}/>
      </Route>
      <Route path='/detail-kegiatan/:id' element={<DetailKegiatan/>}/>
      <Route path='/list-relawan' element={<ListPendaftaran/>}/>
      <Route path='/detail-relawan/:id' element={<DetailKegiatanList/>}/>
      <Route path='/daftar/:id' element={<Form/>}/>
    </Routes>
    </>
  )
}

export default App

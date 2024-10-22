import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import FacilityList from './pages/FacilityList'
import Reservation from './pages/Reservation'
import UserInfo from './pages/UserInfo'
import UserResHistory from './pages/UserResHistory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/facil-list' element={<FacilityList/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/user-info' element={<UserInfo/>}/>
        <Route path='/user-res-his' element={<UserResHistory/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

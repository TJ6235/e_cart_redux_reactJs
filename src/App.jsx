import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import Kart from './Pages/Kart'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='cart' element={<Kart/>}/>
       </Routes>
       <Footer/>
    </>
  )
}


export default App

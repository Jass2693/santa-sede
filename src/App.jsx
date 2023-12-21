
import { useState } from 'react'
import './App.css'
import { Footer } from './comoponentes/Footer/Footer'
import { Header } from './comoponentes/Header/Header'
import { Menu } from './comoponentes/Home/Menu'
import { RouterApp } from './router/RouterApp'
import { useLocation } from 'react-router'
import { useEffect } from 'react'

//import ScrollToTopOnMount from './router/ScrollToTopOnMount'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)
 const {pathname} = useLocation()

 useEffect(() => {
  window.scrollTo(0,0)

 }, [pathname])
 
  return (
    <div className='container'>
     
     <Header/>
      {/* <ScrollToTopOnMount/>  */}
     <RouterApp />
     <Footer />
    </div>
  )
}

export default App

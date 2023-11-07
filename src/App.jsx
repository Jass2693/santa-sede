
import { useState } from 'react'
import './App.css'
import { Footer } from './comoponentes/Footer/Footer'
import { Header } from './comoponentes/Header/Header'
import { Menu } from './comoponentes/Home/Menu'
import { RouterApp } from './router/RouterApp'

function App() {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className='container'>
     
     <Header/>
     <RouterApp />
     <Footer />
    </div>
  )
}

export default App

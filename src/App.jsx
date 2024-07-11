
import { Suspense, lazy, useState } from 'react'
import './App.css'
 import { Footer } from './comoponentes/Footer/Footer'
 import { Header } from './comoponentes/Header/Header'
import { Menu } from './comoponentes/Home/Menu'
import { RouterApp } from './router/RouterApp'
import { useLocation } from 'react-router'
import { useEffect } from 'react'

//import ScrollToTopOnMount from './router/ScrollToTopOnMount'
// const LazyHeader = lazy(()=> import('./comoponentes/Header/Header'));
// const LazyFooter = lazy(()=> import('./comoponentes/Footer/Footer'));
function App() {
  const [activeMenu, setActiveMenu] = useState(false)
 const {pathname} = useLocation()
 const [isLoaded, setIsLoaded] = useState(false)


 useEffect(() => {
   setIsLoaded(false)
   window.scrollTo(0,0)
   setTimeout(()=>{
    setIsLoaded(true);
  },1000)
 }, [pathname])
 
  return (
    <div className='container'>
    
   
     <Header/>
      {/* <ScrollToTopOnMount/>  */}
      
        <RouterApp />

      {
        isLoaded ?
        <Footer/> : ""
      }
    
    </div>
  )
}

export default App

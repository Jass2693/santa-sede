import  { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from '../Home/Menu'
import { MenuContext } from '../../context/MenuContext'



export const Header = () => {
  
  const {activeMenu,setactiveMenu} = useContext(MenuContext)
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState()
  const {headersImages,setHeadersImages} = useContext(MenuContext)

//   useEffect(() => {
//      setCurrentPath(`/assets/2.0/headers${location.pathname}_2.0.png`)
//      console.log(currentPath);
// }, [location.pathname])


  return (
    <header>
      {/* <button onClick={()=>setactiveMenu(true)}>click</button> */}
   
        <div className='logo_container'>
    
        <img src={`/assets/2.0/headers${location.pathname}_2.0.png`} alt="" 
        className='header_background_image animate__animated animate__fadeInDown animate__delay-1s' />
         <div className='logo_responsive'>
            <Link to="/">
            
            <img src="/assets/images/logo_santa_sede.png" alt="logo santa sede" />
            </Link>
          </div>
        <div className='nav_movile_btn_container'>
          <button 
                  onClick={()=>setactiveMenu(true)}
                  style={{border: "none",background: "none" }}
            >

           <img src="/assets/sections/nav_movile_btn.png" alt="volver a menu" />  
          </button>
         
        
    
         {/*  Este Link tengo que convertir en un boton que active y desactive le menu  */}

        </div>
        <div className=''>

         
        </div>
        </div>
        <div className='grey_line'></div>
      
       <Navbar/>
       {/* <div className='relieve_container'>
        <img src="/assets/home/relieve.png" alt="" />
       </div> */}
       <Menu/>
    </header>
  )
}

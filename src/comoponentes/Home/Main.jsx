import React, { useContext } from 'react'
import { HomeCards } from './HomeCards'
import { MenuContext } from '../../context/MenuContext'


 const Main = () => {
  const {activeMenu,setactiveMenu} = useContext(MenuContext)
  

  return (
    <main className={activeMenu ? "disabledClass" : ""}>
        {/* <div className='home_image_container'>
             <img src="/assets/images/home_image.png" alt="home_image"  className='home_image'/>
             
       </div> */}
       <div className='ultimos_lanzamientos_container animate__animated animate__fadeInLeft'><h2>ULTIMOS LANZAMIENTOS</h2></div>
        <HomeCards/>  
    </main>
  )
}
export default Main
import { useContext, useState } from 'react'
import catalogo from './Data/catalogo'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
export const Catalogo = () => {
  const { activeMenu, setactiveMenu,setCarouselImg } = useContext(MenuContext)
  

  return (

    <section className={activeMenu ? "disabledClass" : ""}>

      <div className='catalogo_container'>
        <div className='catalogo_h2_container animate__animated animate__fadeInLeft'><h2>CATÁLOGO</h2></div>
        <div className='items_container'>
        {
          catalogo && catalogo.map(artist => (
          

           
            <div
              key={artist.id}
              className='catalogo_item animate__animated animate__fadeIn animate__delay-1s  animate__slow 2s'
              onClick={()=>setCarouselImg(0)}
         
            >


              <Link

                to="/release"
                state={{ albumData: artist.id }}
              >
               

                  <div className='item_fondo' style={{ backgroundImage: `url("/assets/2.0/catalogo/${artist.image}.png")` }}>

                  </div>
                  <div className='catalogo_text_container'>

                    <h2>{artist.interprete}</h2>
                    <span >{artist.albumName}</span>
                    <span >{artist.ssd}</span>
                  </div>

                
              


              </Link>

              </div>
          ))}
          </div>
      </div>
    </section>
  )
}

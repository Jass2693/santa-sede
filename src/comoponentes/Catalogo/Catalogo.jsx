import { useContext, useState } from 'react'
import catalogo from './Data/catalogo'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
export const Catalogo = () => {
  const { activeMenu, setactiveMenu,setCarouselImg } = useContext(MenuContext)
  
  const reverseData = catalogo.toReversed()
 
  return (

    <section className={activeMenu ? "disabledClass" : ""}>

      <div className='catalogo_container img_fondo_catalogo'>
        <div className='catalogo_h2_container animate__animated animate__fadeInLeft'><h2>CATÁLOGO</h2></div>
        <div className='items_container'>
        {
          reverseData && reverseData.map(artist => (
          

           
            <div
              key={artist.id}
              className='catalogo_item animate__animated animate__fadeIn animate__delay-1s  animate__slow 2s'
              onClick={()=>setCarouselImg(0)}
         
            >


              <a href={artist.url} target='_blank'

                
                state={{ albumData: artist.id }}
                className='link_catalogo_container'
              >
               

                  <div className='item_fondo' style={{ backgroundImage: `url("/assets/2.0/catalogo/${artist.image}.png")` }}>

                  </div>
                  <div className='catalogo_text_container'>

                    <h2>{artist.interprete}</h2>
                    <span >{artist.albumName}</span>
                    <span >{artist.ssd}</span>
                  </div>

                
              


              </a>

              </div>
          ))}
          </div>
      </div>
    </section>
  )
}

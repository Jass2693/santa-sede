import { useContext, useEffect, useRef, useState } from 'react'
import catalogo from './Data/catalogo'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
const Catalogo = () => {
  const { activeMenu, setactiveMenu, setCarouselImg } = useContext(MenuContext)
  const reverseData = catalogo.toReversed()


     
    // arreglar lo del contacto
  

  return (

    <section className={activeMenu ? "disabledClass" : ""}>

      <div className='catalogo_container img_fondo_catalogo'>
        <div className='catalogo_h2_container animate__animated animate__fadeInLeft'><h2>CATÁLOGO</h2></div>
        <div className='items_container'>
          {
            reverseData && reverseData.map(artist => (

              // animate__delay-1s  animate__slow 1s

              <div
                key={artist.id}
                // cgpt
                className='catalogo_item animate__animated animate__fadeIn  animate__delay-1s'
                
                onClick={() => setCarouselImg(0)}

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
export default Catalogo
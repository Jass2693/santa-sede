import { useContext, useState } from 'react'
import catalogo from './Data/catalogo'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
export const Catalogo = () => {
  const { activeMenu, setactiveMenu } = useContext(MenuContext)

  return (

    <section className={activeMenu ? "disabledClass" : ""}>

      <div className='catalogo_container'>
        <div className='catalogo_h2_container'><h2>CATALOGO</h2></div>
        {
          catalogo && catalogo.map(artist => (
            <div
              key={artist.id}
              className='catalogo_item animate__animated animate__fadeIn'
            // style={{backgroundImage: `url("/assets/2.0/catalogo/${artist.image}.png")`,
            //           width: "300px",
            //         height: "300px"}}
            >


              <Link

                to="/release"
                state={{ albumData: artist.id }}
              >
               

                  <div className='item_fondo' style={{ backgroundImage: `url("/assets/2.0/catalogo/${artist.image}.png")` }}>

                  </div>
                  <div className='catalogo_text_container'>

                    <h2>{artist.interprete}</h2>
                    <span style={{display: "inline"}}>{artist.albumName}</span>
                    <span>{artist.ssd}</span>
                  </div>

                
              


              </Link>


            </div>
          ))}
      </div>
    </section>
  )
}

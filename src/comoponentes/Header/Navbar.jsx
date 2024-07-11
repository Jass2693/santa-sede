import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
import { MenuProvider } from '../../context/MenuProvider'

export const Navbar = () => {
  const { headerEffect, setHeaderEffect } = useContext(MenuContext)
  const [underline, setUnderline] = useState(0)
  const location = useLocation()
 console.log(location.pathname);

  const handleActiveItem = (index) => {
    setActiveItem(index)

  };





  return (
    <nav>

 
<ul>
        
        <div className={location.pathname === '/' ? "none_underline" : 'underline'}
            style={{ transform: `translateX(${underline}% ` }}

        />
        <li   >
          <Link to="/" className='animate__animated animate__bounceInDown' onClick={()=>setHeaderEffect(!headerEffect)}>
            <img src="/assets/images/logo_santa_sede.png" className="logo_nav"alt="logo santa sede" />
          </Link>
        </li>


        <li
          className={location.pathname === '/catalogo'  ? 'list_navbar active_border' : 'list_navbar '} 
          onClick={()=>setUnderline(222)}
          
          >
          <Link to="/catalogo" onClick={()=>setHeaderEffect(!headerEffect)}>

            {/* <img src="/assets/letras/catalogo_2.png" alt="ir a seccion Catalogo" /> */}
            <p className={location.pathname === '/catalogo' ? "navbar_text" : "navbar_disabled"}>Catálogo</p>
          </Link>
        </li>
        <li className={(location.pathname === '/artistas' | location.pathname === '/artista-info') ? 'list_navbar active_border' : 'list_navbar'} 
             onClick={()=>setUnderline(450)}
        >
          <Link to="/artistas" onClick={()=>setHeaderEffect(!headerEffect)}>

            {/* <img src="/assets/letras/artistas_2.png" alt="ir a seccion Artistas" /> */}
          <p className={location.pathname === '/artistas' ? "navbar_text" : "navbar_disabled"}>Artistas</p>
          </Link>
        </li>
        <li className={location.pathname === '/extras' ? 'list_navbar active_border' : 'list_navbar'} 
          onClick={()=>setUnderline(666)}
        >
          <Link to="/extras" onClick={()=>setHeaderEffect(!headerEffect)}>

            {/* <img src="/assets/letras/extras_2.png" alt="ir a seccion Extras" /> */}
            <p className={location.pathname === '/extras' ? "navbar_text" : "navbar_disabled"}>Extras</p>
          </Link>
        </li>
   

        <li className={location.pathname === '/santa-sede' ? 'list_navbar active_border' : 'list_navbar'}
              onClick={()=>setUnderline(899)}
        >
          <Link to="/santa-sede" onClick={()=>setHeaderEffect(!headerEffect)}>
            {/* <img src="/assets/letras/santa_sede_2.png" alt="ir a seccion Santa Sede" className='santa_sede_nav' /> */}
            <p className={location.pathname === '/santa-sede' ? "navbar_text" : "navbar_disabled"}>Santa Sede</p> 
          </Link>
        </li>


        <li className={location.pathname === '/contacto' ? 'list_navbar active_border' : 'list_navbar'}
             onClick={()=>setUnderline(1136)}
        >
          <Link to="/contacto" onClick={()=>setHeaderEffect(!headerEffect)}>

            {/* <img src="/assets/letras/contacto_2.png" alt="ir a seccion Contacto" /> */}
            <p className={location.pathname === '/contacto' ? "navbar_text" : "navbar_disabled"}>Contacto</p>
          </Link>
        </li>
     
      </ul>



    </nav>
  )
}

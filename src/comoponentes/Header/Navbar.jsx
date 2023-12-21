import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
import { MenuProvider } from '../../context/MenuProvider'

export const Navbar = () => {
  const { headerEffect, setHeaderEffect } = useContext(MenuContext)
  const [underline, setUnderline] = useState(0)
  const location = useLocation()
 // console.log(location.pathname);

  const handleActiveItem = (index) => {
    setActiveItem(index)

  };

  return (
    <nav>


      <ul>
        
        <div className={location.pathname === '/' ? "" : 'underline'}
            style={{ transform: `translateX(${underline}% ` }}

        />
        <li   >
          <Link to="/" className='animate__animated animate__bounceInDown' onClick={() => setHeaderEffect(!headerEffect)}>
            <img src="/assets/images/logo_santa_sede.png" alt="logo santa sede" />
          </Link>
        </li>


        <li
          className={(location.pathname === '/catalogo' | location.pathname === '/release') ? 'list_navbar active_border' : 'list_navbar '} 
          onClick={()=>setUnderline(195)}
          
          >
          <Link to="/catalogo" onClick={() => setHeaderEffect(!headerEffect)}>

            <img src="/assets/letras/catalogo_2.png" alt="ir a seccion Catalogo" />
          </Link>
        </li>
        <li className={(location.pathname === '/artistas' | location.pathname === '/artista-info') ? 'list_navbar active_border' : 'list_navbar'} 
             onClick={()=>setUnderline(398)}
        >
          <Link to="/artistas" onClick={() => setHeaderEffect(!headerEffect)}>

            <img src="/assets/letras/artistas_2.png" alt="ir a seccion Artistas" />
          </Link>
        </li>
        <li className={location.pathname === '/extras' ? 'list_navbar active_border' : 'list_navbar'} 
          onClick={()=>setUnderline(592)}
        >
          <Link to="/extras" onClick={() => setHeaderEffect(!headerEffect)}>

            <img src="/assets/letras/extras_2.png" alt="ir a seccion Extras" />
          </Link>
        </li>
        <li className={location.pathname === '/editorial' ? 'list_navbar active_border' : 'list_navbar'}
              onClick={()=>setUnderline(795)}
        >
          <Link to="/editorial" onClick={() => setHeaderEffect(!headerEffect)}>

            <img src="/assets/letras/editorial_2.png" alt="ir a seccion Editorial" />
          </Link>
        </li>

        <li className={location.pathname === '/santa-sede' ? 'list_navbar active_border' : 'list_navbar'}
              onClick={()=>setUnderline(1010)}
        >
          <Link to="/santa-sede" onClick={() => setHeaderEffect(!headerEffect)}>
            <img src="/assets/letras/santa_sede_2.png" alt="ir a seccion Santa Sede" className='santa_sede_nav' />
          </Link>
        </li>


        <li className={location.pathname === '/contacto' ? 'list_navbar active_border' : 'list_navbar'}
             onClick={()=>setUnderline(1220)}
        >
          <Link to="/contacto" onClick={() => setHeaderEffect(!headerEffect)}>

            <img src="/assets/letras/contacto_2.png" alt="ir a seccion Contacto" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

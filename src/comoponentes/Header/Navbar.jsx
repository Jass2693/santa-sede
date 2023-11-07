import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'
import { MenuProvider } from '../../context/MenuProvider'

export const Navbar = () => {
  // const {headersImages,setHeadersImages} = useContext(MenuContext)

  return (
    <nav>
     
        <ul>
          <li>
          <Link to="/" className='animate__animated animate__bounceInDown'>
            <img src="/assets/images/logo_santa_sede.png" alt="logo santa sede"/>
          </Link>
          </li>
        
              
            <li >
              <Link to="/catalogo">
              
              <img src="/assets/letras/catalogo_2.png" alt="ir a seccion Catalogo" />
              </Link>
              </li>
            <li>
              <Link to="/artistas">
              
              <img src="/assets/letras/artistas_2.png" alt="ir a seccion Artistas" />
              </Link>
              </li>
            <li>
              <Link to="/extras">
              
              <img src="/assets/letras/extras_2.png" alt="ir a seccion Extras" />
              </Link>
              </li>
            <li>
              <Link to="/editorial">
              
              <img src="/assets/letras/editorial_2.png" alt="ir a seccion Editorial" />
              </Link>
              </li>
           
              <li>
              <Link to="/santa-sede">
              <img src="/assets/letras/santa_sede_2.png" alt="ir a seccion Santa Sede" className='santa_sede_nav' />
              </Link>
              </li>
           
           
            <li>
              <Link to="/contacto">
              
              <img src="/assets/letras/contacto_2.png" alt="ir a seccion Contacto" />
              </Link>
              </li>
        </ul>
    </nav>
  )
}

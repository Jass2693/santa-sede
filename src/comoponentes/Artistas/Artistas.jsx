import React, { useContext } from 'react'
import { data } from './data'
import {Link} from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'

export const Artistas = () => {
    const {activeMenu,setactiveMenu} = useContext(MenuContext)
  return (
  
    <section  className={activeMenu ? "disabledClass" : 'artistas_section'}>
    <div className='catalogo_container'>
        <div className='catalogo_h2_container'><h2>Artistas</h2></div>
        {
            data && data.map(artist => ( 
                <div key={artist.id} className='catalogo_item animate__animated animate__fadeIn'>
                    <Link to="/artista-info"
                           state={{artistData: artist.id}}  
                    >
                    <img src={`/assets/sections/artistas/${artist.profile_image}.jpg`} alt={artist.interprete} />
                    <h4 style={{color: "white"}}>{artist.interprete}</h4>
                   
                    
                    </Link>
                </div>
            ))
        }
        
    </div>
</section>

  )
}

import React, { useContext } from 'react'
import { data } from './data'
import {Link} from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext'

 const Artistas = () => {
    const {activeMenu,setactiveMenu} = useContext(MenuContext)
  return (
  
    <section  className={activeMenu ? "disabledClass" : 'artistas_section'}>
        <div className='artista_h2_container  animate__animated animate__fadeInLeft'><h2>ARTISTAS</h2></div>
    <div className='artistas_container'>
{/* animate__delay-1s animate__slow 2s*/}
        {
            data && data.map(artist => ( 
                <div key={artist.id} className='artista_item animate__animated animate__fadeIn animate__delay-1s '>
                    <a target='_blank' href={artist.url} to="/artista-info"
                           state={{artistData: artist.id}}  
                    >
                        <div className='overlay'></div>
                        <div className='artista_fondo' style={{ backgroundImage: `url("/assets/2.0/artistas/${artist.profile_image}.png")` }}/>
                        <div className='artista_fondo_responsive' style={{ backgroundImage: `url("/assets/2.0/artistas_layout/${artist.profile_image}.png")` }}/>

                      
                    {/* <img src={`/assets/2.0/artistas/${artist.profile_image}.png`} alt={artist.interprete} /> */}
                    <div className='artista_text_container'>

                    <h2 style={{color: "white"}}>{artist.interprete}</h2>
                    </div>
                   
                    
                    </a>
                </div>
            ))
        }
        
    </div>
</section>

  )
}
export default Artistas
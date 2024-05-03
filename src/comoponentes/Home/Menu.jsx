import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext';


export const Menu = () => {
  const {state } = useLocation();
  const [menuOut, setmenuOut] = useState('menu_disabled')

  const {activeMenu,setactiveMenu} = useContext(MenuContext)
//  console.log(activeMenu);
  const handleMenu = () => {
    setactiveMenu(false)
    setmenuOut('animate__animated animate__fadeOutLeft  menu_responsive_out')
  } 

  return (
    <div className={activeMenu ? 'menu_responsive animate__animated animate__fadeInLeft' :  menuOut}>
        <div className='menu_btn_container'>
          {/* <Link 
          to="/"
           onClick={()=> setmenuOut(false)}
          ><img src="/assets/sections/menu_movile_btn.png" alt="menu" /></Link>   */}
          <button style={{border: "none", background: "none"}}
             onClick={ handleMenu}
          >
            <img src="/assets/sections/menu_movile_btn.png" alt="menu" /></button>
        </div>
      

        <div className='menu_icons_container'>
          <a href="https://santasedelabel.bandcamp.com/" target='_Blank'><img src="/assets/footer/vector.png" alt="band-camp" /></a>
          <a href="https://soundcloud.com/santasedelabel" target='_Blank'><img src="/assets/footer/cloud.png" alt="cloud" /></a>
          <a href="https://www.instagram.com/santasedelabel/" target='_Blank'><img src="/assets/footer/instagram.png" alt="instagram" /></a>
          <a href="https://x.com/santasedelabel" target='_Blank'><img src="/assets/footer/twiter.png" alt="twiter - x" /></a>
          <a href="https://open.spotify.com/playlist/1c0Z3lQAck7J3LarybEIfI?si=496997c9d2704831&nd=1" target='_Blank'><img src="/assets/footer/spotify.png" alt="spotify" /></a>
          <a href="https://www.discogs.com/es/label/1854902-Santa-Sede" target='_Blank'><img src="/assets/footer/cd.png" alt="discogs" /></a>
    </div>
    {/* <div className='black_line'></div> */}
         
        <ul className='menu_ul'>
            <li><Link to="/" onClick={handleMenu}>Home</Link></li>
            <li><Link to="/catalogo" onClick={handleMenu}>Catálogo</Link></li>
            <li><Link to="/artistas" onClick={handleMenu}>Artistas</Link></li>
            <li><Link to="/extras" onClick={handleMenu}>Extras</Link></li>
          
            <li><Link to="/santa-sede" onClick={handleMenu}>SANTA SEDE</Link></li>
            <li><Link to="/contacto" onClick={handleMenu}>Contacto</Link></li>
        </ul>

        <div className='footer_menu'>
        <div className='logo_footer_menu'>
          <img src="/assets/footer/logo_footer.png" alt="" />
        </div>
        <span style={{fontWeight: "700"}}>Copyright © 2023 Santa Sede</span>
        <div className='footer_menu_creators'>
        <span  style={{fontWeight: "400"}}>Web Design x Juan Martin Croce </span>
          <span style={{fontWeight: "400"}}> Coding x Ariel Sotelo</span>
        </div>
        </div>
       
    </div>
  )
}


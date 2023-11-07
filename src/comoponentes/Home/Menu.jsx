import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuContext } from '../../context/MenuContext';


export const Menu = () => {
  const {state } = useLocation();

  const {activeMenu,setactiveMenu} = useContext(MenuContext)

  return (
    <div className={activeMenu ? 'menu_responsive animate__animated animate__fadeInLeft' : 'animate__animated animate__fadeOutLeft menu_responsive_out'}>
        <div className='menu_btn_container'>
          {/* <Link 
          to="/"
           onClick={()=> setmenuOut(false)}
          ><img src="/assets/sections/menu_movile_btn.png" alt="menu" /></Link>   */}
          <button style={{border: "none", background: "none"}}
             onClick={ ()=>setactiveMenu(false)}
          >
            <img src="/assets/sections/menu_movile_btn.png" alt="menu" /></button>
        </div>
        

        <div className='menu_icons_container'>
          <a href="" target='_Blank'><img src="/assets/footer/vector.png" alt="vector" /></a>
          <a href="https://soundcloud.com/santasedelabel" target='_Blank'><img src="/assets/footer/cloud.png" alt="cloud" /></a>
          <a href="https://www.instagram.com/santasedelabel/" target='_Blank'><img src="/assets/footer/instagram.png" alt="instagram" /></a>
          <a href="https://twitter.com/santasedelabel" target='_Blank'><img src="/assets/footer/twiter.png" alt="twiter" /></a>
          <a href="https://open.spotify.com/playlist/1c0Z3lQAck7J3LarybEIfI?si=496997c9d2704831&nd=1" target='_Blank'><img src="/assets/footer/spotify.png" alt="spotify" /></a>
          <a href="" target='_Blank'><img src="/assets/footer/cd.png" alt="cd" /></a>
    </div>

        <ul className='menu_ul'>
            <li><Link to="/" onClick={()=> setactiveMenu(false)}>HOME</Link></li>
            <li><Link to="/catalogo" onClick={()=> setactiveMenu(false)}>CATÁLOGO</Link></li>
            <li><Link to="/artistas" onClick={()=> setactiveMenu(false)}>ARTISTAS</Link></li>
            <li><Link to="/extras" onClick={()=> setactiveMenu(false)}>EXTRAS</Link></li>
            <li><Link to="/editorial" onClick={()=> setactiveMenu(false)}>EDITORIAL</Link></li>
            <li><Link to="/santa-sede" onClick={()=> setactiveMenu(false)}>SANTA SEDE</Link></li>
            <li><Link to="/contacto" onClick={()=> setactiveMenu(false)}>CONTACTO</Link></li>
        </ul>

        <div className='footer_menu'>
        <div className='logo_footer_menu'>
          <img src="/assets/footer/logo_footer.png" alt="" />
        </div>
        <span>Copyright © 2023 Santa Sede</span>
        <div className='footer_menu_creators'>
        <span>Web Design x Juan Martin Croce </span>
          <span> Coding x Ariel Sotelo</span>
        </div>
        </div>
       
    </div>
  )
}


import { useContext, useState } from 'react';
import {data} from "./data";
import { Link, useLocation } from 'react-router-dom';
import { MenuContext } from '../../context/MenuContext';


export const Artista_layout = () => {
  const {state} = useLocation();
  const {activeMenu,setactiveMenu} = useContext(MenuContext)

  return (
    <div className={activeMenu ? "disabledClass" : "artistas_layout_section"}>
      
        {
            data ? 
            <div className='artista_layout_container animate__animated animate__fadeIn animate__delay-1s animate__slow 2s'>
               <Link to="/artistas" className='arrow_back'><img src="/assets/arrow_back.png" alt="" id='arrow' /></Link>
              <div className='artista_layout_image_container'>

                <img
                  className='layout_image'
                src={state.artistData ? `/assets/2.0/artistas_layout/${data[state.artistData].profile_image}.png` : `/assets/2.0/artistas_layout/${data[0].profile_image}.png`} alt="" />
              </div>
            
               <div className='artista_layout_info '>
               
                <h2>{state.artistData ? data[state.artistData].interprete : data[0].interprete }</h2>
                <p>{state.artistData ? data[state.artistData].description : data[0].description }</p>
               </div>
            </div>
            : ""
        }
    </div>
  )
}

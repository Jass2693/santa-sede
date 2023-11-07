import { useContext, useState } from 'react';
import {data} from "./data";
import { useLocation } from 'react-router-dom';
import { MenuContext } from '../../context/MenuContext';


export const Artista_layout = () => {
  const {state} = useLocation();
  const {activeMenu,setactiveMenu} = useContext(MenuContext)

  return (
    <div className={activeMenu ? "disabledClass" : ""}>
        {
            data ? 
            <div className='artista_layout_container'>

          
                <img src={state.artistData ? `/assets/sections/artistas/${data[state.artistData].profile_image}.jpg` : `/assets/sections/artistas/${data[0].profile_image}.jpg`} alt="" />
            
               <div className='artista_info animate__animated animate__fadeIn animate__delay-1s'>

                <h2>{state.artistData ? data[state.artistData].interprete : data[0].interprete }</h2>
                <p>{state.artistData ? data[state.artistData].description : data[0].description }</p>
               </div>
            </div>
            : ""
        }
    </div>
  )
}

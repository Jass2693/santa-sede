import React, { useContext } from 'react'
import { data } from './data'
import { MenuContext } from '../../context/MenuContext'

export const HomeCards = () => {
  const {activeMenu,setactiveMenu} = useContext(MenuContext)

  return (
    <div className={activeMenu ? "disabledClass" : "cards_section"}>
      <div className='home_container animate__animated animate__fadeIn '>
      
      {
       data && data.map(card => (
            <div key={card.id} className='home_item animate__animated animate__fadeIn'>
              
              

                <img src={`/assets/sections/catalogo2/${card.src}.png`} alt={card.catalogo} 
                className='home_cards_image'
                />
  
               
               
            </div>
        ))}
      </div>
    </div>
  )
}

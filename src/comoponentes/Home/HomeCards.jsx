import React, { useContext } from 'react'
import { data } from './data'
import { MenuContext } from '../../context/MenuContext'

export const HomeCards = () => {
  const {activeMenu,setactiveMenu} = useContext(MenuContext)
  const reverseData = data.toReversed() 


  return (
    <div className={activeMenu ? "disabledClass" : "cards_section"}>
      <div className='home_container  animate__animated animate__fadeIn'>
      
      {
       reverseData && reverseData.map(card => (
            <div key={card.id} className='home_item animate__animated animate__fadeIn animate__delay-1s	 animate__slow 1s'>
              
              <div className='rectangle'></div>
              
              {/* <div className='home_image_container'> */}

                <img src={`/assets/home/${card.src}.png`} alt={card.catalogo} 
                className='home_cards_image'
                />
              {/* </div> */}
              <div className='item_text_container'>
              <span>{card.interprete}</span>
              <p>{card.title}</p>
              </div>
               
               
            </div>
        ))}
      </div>
    </div>
  )
}

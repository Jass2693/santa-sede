import React, { useContext } from 'react'
import { catalogo } from './Data/catalogo'
import { MenuContext } from '../../context/MenuContext';

export const Carousel = ({ props }) => {
  const {setCarouselImg,carouselImg} = useContext(MenuContext)
  
  return (
    <div className='release_carrousel'>
      {
        catalogo[props].imageArr && catalogo[props].imageArr.map((image, index) => (

          <img
            src={`/assets/sections/release/${image}.png`}
            alt=""
            key={index}
            style={{ width: "80px", height: "80px",cursor: "pointer" }}
            onClick={()=>setCarouselImg(index)}
            className={index !== carouselImg ? 'no-active' : ""}

          />

        ))
      }






    </div>
  )
}

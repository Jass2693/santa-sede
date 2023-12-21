import React, { useContext } from 'react'
import { catalogo } from './Data/catalogo'
import { MenuContext } from '../../context/MenuContext';

export const Carousel = ({ props }) => {
  const {setCarouselImg,carouselImg} = useContext(MenuContext)
  
  
  return (
    <div className='release_carrousel animate__animated animate__fadeIn animate__fadeIn animate__delay-1s  animate__slow 2s'>
      {
        (catalogo[props].imageArr.length > 1)  && catalogo[props].imageArr.map((image, index) => (

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

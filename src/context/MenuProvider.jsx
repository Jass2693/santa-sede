import React, { useState } from 'react'
import { MenuContext } from './MenuContext'

export const MenuProvider = ({children}) => {
    const [activeMenu, setactiveMenu] = useState(false)
    const [headersImages, setHeadersImages] = useState(true)
    const [carouselImg,setCarouselImg] = useState(0)
    const [headerEffect, setHeaderEffect] = useState(true)
   
  return (
    <MenuContext.Provider
    value={{
      
      activeMenu,
      setactiveMenu,
      headersImages,
       setHeadersImages,
       carouselImg,
       setCarouselImg,
       headerEffect, setHeaderEffect,
      

    }}
    >
    {children}
    </MenuContext.Provider>
  )
}


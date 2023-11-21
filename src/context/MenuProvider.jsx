import React, { useState } from 'react'
import { MenuContext } from './MenuContext'

export const MenuProvider = ({children}) => {
    const [activeMenu, setactiveMenu] = useState(false)
    const [headersImages, setHeadersImages] = useState(true)
    const [carouselImg,setCarouselImg] = useState(0)
  return (
    <MenuContext.Provider
    value={{
      
      activeMenu,
      setactiveMenu,
      headersImages,
       setHeadersImages,
       carouselImg,
       setCarouselImg

    }}
    >
    {children}
    </MenuContext.Provider>
  )
}


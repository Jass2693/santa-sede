import React, { useState } from 'react'
import { MenuContext } from './MenuContext'

export const MenuProvider = ({children}) => {
    const [activeMenu, setactiveMenu] = useState(false)
    const [headersImages, setHeadersImages] = useState(true)
  return (
    <MenuContext.Provider
    value={{
      
      activeMenu,
      setactiveMenu,
      headersImages,
       setHeadersImages
    }}
    >
    {children}
    </MenuContext.Provider>
  )
}


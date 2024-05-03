import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../comoponentes/Home/Main'
import { SantaSede } from '../comoponentes/SantaSede/SantaSede'
import { Catalogo } from '../comoponentes/Catalogo/Catalogo'
import { Contacto } from '../comoponentes/Contacto/Contacto'
import { Artistas } from '../comoponentes/Artistas/Artistas'
import { Artista_layout } from '../comoponentes/Artistas/Artista_layout'
import { Extras } from '../comoponentes/Extras/Extras'
import { Editorial } from '../comoponentes/Editorial/Editorial'
import { Menu } from '../comoponentes/Home/Menu'
// import { Release } from '../comoponentes/Catalogo/Release'


export const RouterApp = () => {
  return (
    
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/santa-sede' element={<SantaSede />}/>
    <Route path='/catalogo' element={<Catalogo/>}/>
    <Route path='/contacto' element={<Contacto/>}/>
    <Route path='/artistas' element={<Artistas/>}/>
    <Route path='/artista-info' element={<Artista_layout/>}/>
    <Route path='/extras' element={<Extras/>}/>
    {/* <Route path='/editorial' element={<Editorial/>}/> */}
    {/* <Route path='/release' element={<Release/>}/> */}
    {/* <Route path='/menu' element={<Menu/>}/>
    */}
   

</Routes>
  )
}

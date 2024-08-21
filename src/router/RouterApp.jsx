import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

//import { Artista_layout } from '../comoponentes/Artistas/Artista_layout'

// import { Menu } from '../comoponentes/Home/Menu'
// import { Release } from '../comoponentes/Catalogo/Release'
const LazyMain = lazy(()=> import('../comoponentes/Home/Main.jsx'));
const LazySede = lazy(()=> import('../comoponentes/SantaSede/SantaSede'));
const LazyCatalogo = lazy(()=> import('../comoponentes/Catalogo/Catalogo'));
const LazyContacto = lazy(()=> import('../comoponentes/Contacto/Contacto'));
const LazyArtistas = lazy(()=> import('../comoponentes/Artistas/Artistas'));
const LazyExtras = lazy(()=> import('../comoponentes/Extras/Extras'));


export  const RouterApp = () => {
  return (
    
    <Suspense fallback={<div style={{height: "500px"}}></div>}>

 
    <Routes>
      <Route  path='/' element={<LazyMain/>}/>
    <Route path='/santa-sede'  element={<LazySede/>}/>
    <Route path='/catalogo' element={<LazyCatalogo/>}/>
    <Route path='/contacto' element={<LazyContacto/>} />
    <Route path='/artistas' element={<LazyArtistas/>}/>
    <Route path='/extras' element={<LazyExtras/>}/>
    
    
    {/* <Route path='/artista-info' element={<Artista_layout/>}/> */}
    {/* <Route path='/editorial' element={<Editorial/>}/> */}
    {/* <Route path='/release' element={<Release/>}/> */}
    {/* <Route path='/menu' element={<Menu/>}/>
    */}
   

</Routes>
</Suspense>
  )
}

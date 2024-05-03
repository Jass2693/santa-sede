// import {useContext, useEffect, useState} from 'react'
// import {Link, useLocation} from 'react-router-dom'
// import { data } from './Data/data';
// import { MenuContext } from '../../context/MenuContext';
// import { Carousel } from '../Catalogo/Carousel';
// import {catalogo} from './Data/catalogo'
// export const Release = () => {

//    const {state } = useLocation();
//    const {activeMenu,   carouselImg} = useContext(MenuContext)

  
//   //  useEffect(() => {
//   //   console.log(carouselImg);
//   //  }, [carouselImg])
   


//   return (
//     <section className={activeMenu ? "disabledClass" : 'release_container'}>
//         <Link to="/catalogo" className='arrow_back_release'><img src="/assets/arrow_back.png" alt="" id='arrow' /></Link>
//         <div className='release_image_resp animate__animated  animate__fadeIn  animate__slow 2s'>

// <img src={`/assets/sections/release/${ catalogo[state.albumData].imageArr[carouselImg] }.png`} alt="" />

// </div>
//         <iframe className="release_reproductor_responsive" src={state.albumData ? data[state.albumData].embed_src_resp  : data[0].embed_src_resp} seamless><a href={state.albumData ? data[state.albumData].embed_href : data[0].embed_href}>Éxitos Cumbiales &#39;23 (SSD-016) de CRRDR</a></iframe>

//       <div className='release_info animate__animated  animate__fadeIn animate__delay-1s  animate__slow 2s'>
        
//         <div className='release_title'>
//         <h2>{state.albumData ? data[state.albumData].albumName : data[0].albumName }</h2>
//         <h5>by {state.albumData ? data[state.albumData].interprete : data[0].interprete}</h5>
//         </div>

//         <div className='release_description '>
//           <p>
//           {state.albumData ? data[state.albumData].description : data[0].description}
//           </p>
//         </div>
        
//         <div className='release_date'>

//           <p>{state.albumData ? data[state.albumData].release : data[0].release}</p>
//         </div>

//           <div className='release_producers'>
//           <p style={{marginBottom:"50px"}}>{state.albumData ? data[state.albumData].release_by : data[0].release_by}</p>

//               {
//                 state.albumData ? data[state.albumData].producers.map((element,index)=> (
//                   <p key={index}>{element}</p>
//                 )) :  data[0].producers.map((element, index) => (
//                   <p key={index}>{element}</p>))
//               }              

              
            
//           </div>
//           <div className='release_extras'>
            
//             <p>{state.albumData ? data[state.albumData].extras : data[0].extras}</p>
//             </div>
        
//       </div>
//       <div className='release_album_container'>

//         <div className='release_image animate__animated animate__fadeIn  animate__delay-1s  animate__slow 2s'>

//           <img src={`/assets/sections/release/${ catalogo[state.albumData].imageArr[carouselImg] }.png`} alt="" />
          
//           </div>
//              <Carousel props={state.albumData ? data[state.albumData].id : data[0].id}/> 

//           <div className='realese_songs_container '>
              
//         <iframe className="release_reproductor
//         animate__animated animate__fadeIn  animate__delay-1s  animate__slow 2s
        
//         " src={state.albumData ? data[state.albumData].embed_src  : data[0].embed_src} seamless><a href={state.albumData ? data[state.albumData].embed_href : data[0].embed_href}>Éxitos Cumbiales &#39;23 (SSD-016) de CRRDR</a></iframe>

//         </div>

//       </div>
       
//     </section>
//   )
// }





//<iframe style="border: 0; width: 350px; height: 442px;" src="https://bandcamp.com/EmbeddedPlayer/track=2701503845/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://crrdr.bandcamp.com/track/el-chavo-del-gabber">El Chavo Del Gabber de CRRDR</a></iframe>
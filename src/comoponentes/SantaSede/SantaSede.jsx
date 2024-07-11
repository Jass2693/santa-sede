import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

 const SantaSede = () => {
  const { activeMenu, setactiveMenu } = useContext(MenuContext)
  return (
    <section className={activeMenu ? "disabledClass" : "santa_sede_container"}>
      <div className='santa_h2_container animate__animated animate__fadeInLeft'>
            <img src="/assets/letras/santa_sede_responsive.png" alt="santa Sede" className='santa_sede_h2' />
          </div>
      <div className='santa_sede_imageMovile_container'>

        {/* <img src="/assets/sections/santa-sede-movile.png" alt="" /> */}
      </div>
      
      <div className='santa_sede_textContainer animate__animated animate__fadeIn   animate__slow 2s'>
      <div>

        <p>
          Santa Sede es un colectivo en bruto que trata de equilibrarse
          entre la música mainstream, la conspiración bailable y la experimentación sonora,
          triada sintética que produce una vibración entre los géneros urbanos sin destruirlos pero expandiéndolos.
        </p>
        <p >
          Un sello que plantea una poética hiper regionalista, una fusión que nace en tres puntos de la argentina
          (Río Grande, Quilmes y Buenos Aires).
        </p>
        <p >
          Esta cofradía musical surge durante los inicios de la pandemia del 2020, partiendo de una necesidad contextual: a la indeterminación de nuestro tiempo le respondemos con indeterminación musica.
        </p>
        <p>
          Una épica narrativa y multidimensional, que se expande desde uno de los puntos más australes del mundo y cruza por el conurbano hacia los nortes.
        </p>
      </div>
      <div>

        <p className='text_italic'>
          Santa Sede is a collective that seeks to find a balance between mainstream music, danceable conspiracy and sound experimentation, a synthetic triad which disturbs urban genres in order not to destroy but rather expand them.


        </p>
        <p className='text_italic'>
          A record label with a hyper regional poetic, a fusion born in three points of Argentina (Río Grande, Quilmes and Buenos Aires).
        </p>
        <p className='text_italic'>
          This musical union arises during the beginning of the 2020 world pandemic, starting from a contextual need: facing the indetermination of our times with musical indetermination as well.
        </p>
        <p className='text_italic'>
          An epic and multidimentional narrative which expands from one of the southernmore points of the globe, crossing through the suburbs all the way to northern lands.
        </p>
      </div>
      </div>
      {/* <div className='santa_sede_imageContainer'>
        <img src="/assets/sections/santa-sede.png" alt="" />
       

    </div> */}

    </section>
  )
}
export default SantaSede
import { useContext } from 'react'
import { data } from './data'
import { MenuContext } from '../../context/MenuContext'

const Extras = () => {
  const { activeMenu, setactiveMenu } = useContext(MenuContext)

  const reverseData = data.toReversed()
  
  return (
    <section className={activeMenu ? "disabledClass" : 'artistas_section'}>
      <div className='catalogo_container'>
        <div className='catalogo_h2_container animate__animated animate__fadeInLeft'>
          <h2 className='animate__animated animate__fadeIn  animate__delay-1s'>EXTRAS</h2>
          </div>
          <div className='items_container'>


        {
          reverseData && reverseData.map(element => (
            <div key={element.id} className='catalogo_item animate__animated animate__fadeIn  animate__delay-1s'>
              <a href={element.url} target="_blank">
                <div className='item_fondo' style={{ backgroundImage: `url("/assets/2.0/extras/${element.extras_image}.png")` }}>

                </div>

                <div className='catalogo_text_container'>

                  <h2>{element.interprete}</h2>
                  <span style={{ display: "inline" }} className={element.id == 1 || element.id == 2 ? "bold_name" : "" }>{element.albumName}</span>
                  {/* <span>{artist.ssd}</span> */}
                </div>



                {/*                     <img src={`/assets/sections/extras/${element.extras_image}.png`} alt={element.interprete} /> */}
              </a>

            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
}
export default Extras

{/* <div
key={artist.id}
className='catalogo_item animate__animated animate__fadeIn'

>


<Link

  to="/release"
  state={{ albumData: artist.id }}
>
 

    <div className='item_fondo' style={{ backgroundImage: `url("/assets/2.0/catalogo/${artist.image}.png")` }}>

    </div>
    <div className='catalogo_text_container'>

      <h2>{artist.interprete}</h2>
      <span style={{display: "inline"}}>{artist.albumName}</span>
      <span>{artist.ssd}</span>
    </div>

  



</Link>


</div> */}
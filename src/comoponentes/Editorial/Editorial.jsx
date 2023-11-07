import  { useContext } from 'react'
import { data } from './data'
import { MenuContext } from '../../context/MenuContext'

export const Editorial = () => {
    const {activeMenu,setactiveMenu} = useContext(MenuContext)
  return (
    <section className={activeMenu ? "disabledClass" : "artistas_section"}>
        <div className='catalogo_container'>
        <div className='catalogo_h2_container'><h2>EDITORIAL</h2></div>
            {
                data && data.map(element => (
                    <div key={element.id} className='catalogo_item animate__animated animate__fadeIn '>
                        <a href={element.url} target="_blank" rel="noopener noreferrer">

                        <img src={`/assets/sections/editorial/${element.card_image}.png`} alt={element.id} />
                        </a>

                    </div>
                ))
            }
        </div>
    </section>
  )
}

import { useContext } from 'react'
import { data } from './data'
import { MenuContext } from '../../context/MenuContext'

export const Editorial = () => {
    const { activeMenu, setactiveMenu } = useContext(MenuContext)
    return (

        <section className={activeMenu ? "disabledClass" : "artistas_section"}>
            <div className='catalogo_container'>
                <div className='catalogo_h2_container  animate__animated animate__fadeInLeft'><h2>EDITORIAL</h2></div>
                <div className='items_container'>

                {
                    data && data.map(element => (
                        <div key={element.id} className='catalogo_item animate__animated animate__fadeIn animate__delay-1s animate__slow 2s'>
                            <a href={element.url} target="_blank" rel="noopener noreferrer">
                                <div className='item_fondo' style={{ backgroundImage: `url("/assets/2.0/editorial/${element.card_image}.png")` }}>

                                </div>

                                <div className='catalogo_text_container'>

                                    <h2>{element.interprete}</h2>
                                    <span style={{ display: "inline" }}>{element.albumName}</span>
                                    {/* <span>{artist.ssd}</span> */}
                                </div>
                                {/* <img src={`/assets/sections/editorial/${element.card_image}.png`} alt={element.id} /> */}
                            </a>

                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

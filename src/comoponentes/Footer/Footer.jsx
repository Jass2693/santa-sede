import { useContext, useState } from "react"
import { MenuContext } from "../../context/MenuContext"



     
export const Footer = () => {
  const [email, setEmail] = useState("")
  const {activeMenu,setactiveMenu} = useContext(MenuContext)

  const suscribeMessage = "Hola quiero suscribirme a su newsletter!!"
  const handleChange = (event) => {
  setEmail(event.target.value)
    console.log(email);
  }


  return (
    <footer className={activeMenu ? "disabledClass" : "animate__animated   animate__slideInUp"}>
      <div className='footer_container '>
        <form action="">
          <label>Suscribite a nuestro newsletter:</label>
          <div style={{ display: "flex" }}>
            <input type="email" name="email"  value={email} id="" placeholder='Email...' onChange={handleChange}  />
             <a href={`mailto:jcroce90@gmail.com?subject=${email}&body=${suscribeMessage}`}><img src="/assets/footer/play_btn.png" alt="" /></a> 

          </div>
        </form>
        <div className='logo_footer_container'>
          <img src="/assets/footer/logo_footer.png" alt="" />
        </div>

      </div>
      <div className='foot_page'>
        <div className='foot_icons_container'>
          <a href="" target='_Blank'><img src="/assets/footer/vector.png" alt="vector" /></a>
          <a href="https://soundcloud.com/santasedelabel" target='_Blank'><img src="/assets/footer/cloud.png" alt="cloud" /></a>
          <a href="https://www.instagram.com/santasedelabel/" target='_Blank'><img src="/assets/footer/instagram.png" alt="instagram" /></a>
          <a href="https://twitter.com/santasedelabel" target='_Blank'><img src="/assets/footer/twiter.png" alt="twiter" /></a>
          <a href="https://open.spotify.com/playlist/1c0Z3lQAck7J3LarybEIfI?si=496997c9d2704831&nd=1" target='_Blank'><img src="/assets/footer/spotify.png" alt="spotify" /></a>
          <a href="" target='_Blank'><img src="/assets/footer/cd.png" alt="cd" /></a>

        </div>
          <span>Copyright © 2023 Santa Sede</span>
        <div className='footer_creators'>
          <span>Web Design x Juan Martin Croce |</span>
          <span> Coding x Ariel Sotelo</span>
        </div>
      </div>
    </footer>
  )
}

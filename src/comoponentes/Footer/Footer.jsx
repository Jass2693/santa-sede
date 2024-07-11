import { useContext, useState } from "react"
import { MenuContext } from "../../context/MenuContext"
import emailjs from '@emailjs/browser';



     
export const Footer = () => {
  const [subs, setSubs] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const {activeMenu,setactiveMenu} = useContext(MenuContext)
  const [formData,setFormData] = useState({
    asunto: "Nueva suscripción al newsletter!!",
    userName: "",
    message: "Hola quiero suscribirme a su newsletter!!",
    userLastName: "",
    userEmail: "",
  })
  const {userName,userLastName,userEmail,asunto,message} = formData


  const handleChange = (event) => {
     setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    setisLoading(true)
    emailjs.sendForm('service_cmecajf','template_bpk59dq', event.target, 'kzu38ckiUHkquPgRN')
    .then(response => {
    if(response.status === 200) {
    
      setSubs(true) 
      setisLoading(false)
    }else {setSubs(false)
    
      setisLoading(false)
    }
    
    })
    .catch(error => {
      console.log(error)
      setFormMsj("MSj no enviado") 
      setisLoading(false)
    
    })


    // try {
    //   const response = await fetch('https://mail-sender-zd89.onrender.com/api/contacto', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
        
    //     console.log('Formulario enviado con éxito');
    //     setSubs(true)
    //     console.log(formData);
    //     // Puedes realizar cualquier acción adicional aquí (por ejemplo, mostrar un mensaje de éxito al usuario)
    //   } else {
    //     console.error('Error al enviar el formulario');
      
    //     // Puedes manejar el error de alguna manera (por ejemplo, mostrar un mensaje de error al usuario)
    //   }
    // } catch (error) {
    //   console.error('Error en la solicitud:', error);
    // }
   // console.log("a");
  
  
    // const form = new FormData(this)
    // console.log(form);
  }


  return (
    <footer className={activeMenu ? "disabledClass" : "animate__animated   animate__slideInUp"}>
      <div className='footer_container '>
        <form action="" onSubmit={handleSubmit}>
          <label>Suscribite a nuestro newsletter:</label>

          <div style={{ display: "flex" }}>
            <input type="email" name="userEmail"  value={userEmail} id="" placeholder='Email...' onChange={handleChange}  />
             {/* <a href={`mailto:jcroce90@gmail.com?subject=${email}&body=${suscribeMessage}`}><img src="/assets/footer/play_btn.png" alt="" /></a>  */}
             <input type="text" name="userName"  value={userName} id="" style={{display:"none"}} onChange={handleChange}  />
             <input type="text" name="asunto"  value={asunto} id=""  style={{display:"none"}} onChange={handleChange}  />
             <input type="text" name="message"  value={message} id="" style={{display:"none"}} onChange={handleChange}  />
            
            <button type="submit"
              disabled={isLoading}
      
              className={isLoading ? "btn_submit_footer" : "isLoadingActive" }
            ><img src="/assets/footer/play_btn.png" alt="" 
            
            /></button>
          </div>
          <span className={subs ? "suscripcion_msj" : "disabled_msjs"}>Gracias x suscribirte!</span>
        </form>
        <div className='foot_icons_container_resp'>
          <a href="https://santasedelabel.bandcamp.com/" target='_Blank'><img src="/assets/footer/vector.png" alt="band-camp" /></a>
          <a href="https://soundcloud.com/santasedelabel" target='_Blank'><img src="/assets/footer/cloud.png" alt="cloud" /></a>
          <a href="https://www.instagram.com/santasedelabel/" target='_Blank'><img src="/assets/footer/instagram.png" alt="instagram" /></a>
          <a href="https://x.com/santasedelabel" target='_Blank'><img src="/assets/footer/twiter.png" alt="twiter - x" /></a>
          <a href="https://open.spotify.com/playlist/1c0Z3lQAck7J3LarybEIfI?si=496997c9d2704831&nd=1" target='_Blank'><img src="/assets/footer/spotify.png" alt="spotify" /></a>
          <a href="https://www.discogs.com/es/label/1854902-Santa-Sede" target='_Blank'><img src="/assets/footer/cd.png" alt="discogs" /></a>
        

        </div>
        <div className='logo_footer_container'>
          <img src="/assets/footer/logo_footer.png" alt="" />
        </div>

      </div>
      <div className='foot_page'>
        <div className='foot_icons_container'>
          <a href="https://santasedelabel.bandcamp.com/" target='_Blank'><img src="/assets/footer/vector.png" alt="band-camp" /></a>
          <a href="https://soundcloud.com/santasedelabel" target='_Blank'><img src="/assets/footer/cloud.png" alt="cloud" /></a>
          <a href="https://www.instagram.com/santasedelabel/" target='_Blank'><img src="/assets/footer/instagram.png" alt="instagram" /></a>
          <a href="https://x.com/santasedelabel" target='_Blank'><img src="/assets/footer/twiter.png" alt="twiter - x" /></a>
          <a href="https://open.spotify.com/playlist/1c0Z3lQAck7J3LarybEIfI?si=496997c9d2704831&nd=1" target='_Blank'><img src="/assets/footer/spotify.png" alt="spotify" /></a>
          <a href="https://www.discogs.com/es/label/1854902-Santa-Sede" target='_Blank'><img src="/assets/footer/cd.png" alt="discogs" /></a>
          <span className="copyright">Copyright © 2023 Santa Sede</span>
        

        </div>
        <div className='footer_creators'>
        <span className="copyright_resp">Copyright © 2023 Santa Sede</span>
          <span>Web Design x Juan Martin Croce </span>
          <span id="footer_bar">|</span>
          <span id="coded_by" > Coded x Ariel Sotelo</span>
        </div>
      </div>
    </footer>
  )
}


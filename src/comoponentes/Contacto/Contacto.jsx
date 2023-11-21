import  { useContext, useState } from 'react'
import { MenuContext } from '../../context/MenuContext'

export const Contacto = () => {
  const [formData,setFormData] = useState({
    userName: "",
    userLastName: "",
    userEmail: "",
    asunto: "",
    message: "",
  })
  const {userName,userLastName,userEmail,asunto,message} = formData
  const {activeMenu,setactiveMenu} = useContext(MenuContext)


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // const form = new FormData(this)
    // console.log(form);
  }

  //action="https://formsubmit.co/jass2693@gmail.com"
  return (
    <section className={activeMenu ? "disabledClass" : "section_contacto"}>
      <div className='contacto_h2_container'><h2>CONTACTO</h2></div>
        <form onSubmit={handleSubmit} className='contacto_container animate__animated animate__fadeIn animate__delay-1s'>
            <label >Nombre</label>
            <input type="text"
             name="userName"
             value={userName}
             placeholder='Juan'
             required 
             onChange={handleChange}  />

            <label >Apellido</label>
            <input 
            type="text" 
            name="userLastName"
            value={userLastName} 
            placeholder='Gonzalez'
            required 
            onChange={handleChange}/>

            <label>Correo Electronico</label>
            <input 
            type="email" 
            name="userEmail"
            value={userEmail}
            placeholder='juan@mail.com'
            required 
            onChange={handleChange}/>

            <label>Asunto</label>
            <input 
            type="text" 
            name="asunto"
            value={asunto} 
            placeholder='motivo del contacto' 
            required
            onChange={handleChange}/>

            <label>Mensaje</label>
            <textarea 
            name="message"
            value={message}
            cols="30"
            rows="10" 
            placeholder='Su mensaje' 
            onChange={handleChange}></textarea>
            <a href={`mailto:jcroce90@gmail.com?subject=${asunto}&body=${message}%0A
           
            ${userName}%20 ${userLastName}%0A${userEmail}
            `} className='send_btn'>ENVIAR</a>
        </form>
    </section>
  )
}

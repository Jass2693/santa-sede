import  { useContext, useState } from 'react'
import { MenuContext } from '../../context/MenuContext'
import emailjs from '@emailjs/browser';

 const Contacto = () => {
  const [isLoading, setisLoading] = useState(false)
  const [msjEnviado, setMsjEnviado] = useState(false)
  const [msjNoEnviado, setMsjNoEnviado] = useState(false)
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
    setMsjEnviado(false)
    setMsjNoEnviado(false)
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
    
      setMsjEnviado(true) 
      setisLoading(false)
    }else {setMsjNoEnviado(true)
      setisLoading(false)
    }
    
    })
    .catch(error => {
      console.log(error)
      setMsjNoEnviado(true) 
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
    //     setMsjEnviado(true)
    //     console.log('Formulario enviado con éxito', formData);
    //     // Puedes realizar cualquier acción adicional aquí (por ejemplo, mostrar un mensaje de éxito al usuario)
    //   } else {
    //     console.error('Error al enviar el formulario');
    //     setMsjNoEnviado(true)
    //     // Puedes manejar el error de alguna manera (por ejemplo, mostrar un mensaje de error al usuario)
    //   }
    // } catch (error) {
    //   console.error('Error en la solicitud:', error);
    // }
  
    // const form = new FormData(this)
    // console.log(form);
  }

  //action="https://formsubmit.co/jass2693@gmail.com"
  return (
    <section className={activeMenu ? "disabledClass" : "section_contacto"}>
      <div className='contacto_h2_container'><h2>CONTACTO</h2></div>
        <form onSubmit={handleSubmit} 
        className='contacto_container animate__animated animate__fadeIn animate__delay-1s'
        >
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
            style={{marginBottom: "20px"}}
            name="message"
            value={message}
            cols="30"
            rows="10" 
            required
            placeholder='Su mensaje' 
            onChange={handleChange}></textarea>
       
            <button type='submit' style={{marginBottom: "10px"}} 
              className={isLoading ? "btn_submit_footer send_btn" : "isLoadingActive send_btn" }
        //    className='send_btn'
               disabled={isLoading}
           
            
            >ENVIAR</button>
            
            <span className={msjEnviado ? 'msj-enviado' : "disabled-msjs"}>Mensaje enviado</span>
            <span className={msjNoEnviado ? 'msj-no-enviado' : "disabled-msjs"}>No se pudo enviar el mensaje</span>
        </form>
    </section>
  )
}
export default Contacto
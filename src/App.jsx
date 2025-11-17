import styles from './App.module.css'
import facebookIcon from '/facebook.webp'
import instagramIcon from '/instagram.webp'
import linkedinIcon from '/github.png'
import whatsappIcon from '/whatsapp.webp'

import { useState, useEffect } from 'react'
import { Card } from './components/card'

function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
      fetch('/cardsInfo.json')
        .then(response => response.json())
        .then(data => {
          setDados(data)
        })
  }, [])

  const defaultPhoneNumber = '5541999999999'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }
  
  const handleZap = () => {
    const {name, email, message} = formData

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlZap, "_blank")
  }

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className='' src='' alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Anthony Bittencorut</h2>
            <p className={styles.paragraph}>Desenvolvedor intermediario, com habilidades em linguagens C, Python, JavaScript, CSS e HTML. Atualmente cursando Tecnico em Analise e Desenvolvimento de Sistemas</p>
          </div>
        </section>

        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>TECNOLOGIAS</h2>
          <div className={styles.wrapCards}>
              {dados.map((item) => {
                return(
                  <div key={item.id}>
                    <Card tec={item.tecnologia} image={item.imagem} text={item.texto}/>
                  </div>
                )
              })}
         </div>
        </section>

        <section id='s4' className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">Informe seu email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Informe uma mensagem</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>
        
      </main>
      <footer className={styles.rodape}>
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={facebookIcon} alt="Facebook" /> </a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={instagramIcon} alt="Instagram" /> </a>
        <a href="https://github.com/AnthonyBittencourt" target='_blank' rel='noopener noreferrer'> <img width={45} src={linkedinIcon} alt="Linkedin" /> </a>
        <a href="https://www.whatsapp.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={whatsappIcon} alt="WhatsApp" /> </a>
      </footer>
    </>
  )
}

export default App

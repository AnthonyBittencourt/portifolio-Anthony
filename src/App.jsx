import styles from'./App.module.css'
import fotoperfil from '../public/foto1.png'
import facebookIcon from '../public/FACEBOOK.png'
import githubIcon from '../public/GITHUB.png'
import instagramIcon from '../public/INSTAGRAM.png'
import whatsappIcon from '../public/WHATSAPP.webp'

import cssIMG from'/css.png'
import htmlIMG from '/html.png'
import JSimg from '/JS.webp'
import reactIMG from '/react.png'
import vercelIMG from '/VERCEL.png'
import viteIMG from '/VITE.png'

function App() {

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Curiosidade</a>
      </nav>
      <main>
        <section className={styles.s1} id="s1">
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={fotoperfil} alt=''/>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Anthony Bittencourt</h2>
            <p className={styles.paragraph}>Desenvolvedor intermediario, com habilidades em linguagens C, Python, JavaScript, CSS e HTML. Atualmente cursando Tecnico em Analise e Desenvolvimento de Sistemas</p>
          </div>
        </section>

        <section className={styles.s2} id="s2">
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>

            <div className={styles.card}>
              <img width={100} src={htmlIMG} alt='HTML'/>
              <h3>HTML</h3>
              <p>fornece a estrutura e a organização de um site, definindo elementos como títulos, parágrafos, imagens e links para que os navegadores possam interpretá-los corretamente. </p>
            </div>  

            <div className={styles.card}>
              <img width={100} src={cssIMG} alt='CSS'/>
              <h3>CSS</h3>
              <p> Ele permite separar o conteúdo de um site (HTML) da sua aparência (CSS), controlando elementos como cores, fontes, espaçamento, layout e design para criar páginas web mais agradáveis e organizadas. </p>
            </div>  

            <div className={styles.card}>
              <img width={100} src={JSimg} alt='JS'/>
              <h3>JS</h3>
              <p>adiciona funcionalidades como animações, validação de formulários, e carregamento de conteúdo sem recarregar a página.</p>
            </div> 

            <div className={styles.card}>
              <img width={100} src={viteIMG} alt='VITE'/>
              <h3>VITE JS</h3>
              <p>Vite é uma ferramenta de build e servidor de desenvolvimento para projetos de front-end, focada em velocidade e eficiência</p>
            </div> 

            <div className={styles.card}>
              <img width={100} src={reactIMG} alt='REACT'/>
              <h3>React</h3>
              <p>React é uma biblioteca JavaScript de código aberto usada para construir interfaces de usuário (UI) interativas para sites e aplicativos.</p>
            </div> 
            
            <div className={styles.card}>
              <img width={100} src={vercelIMG} alt='VERCEL'/>
              <h3>Vercel</h3>
              <p>HMTL DESCRIPTON</p>
            </div> 

          </div>
        </section>

        <section id="s3">
          <h2>sessao 3</h2>
        </section>

        <section id="s4">
          <h2>sessao 4</h2>
        </section>
      </main>
      <footer className={styles.rodape}>
        <a href='https://www.facebook.com' target='_blank'> <img width={55} src={facebookIcon} alt='Facebook'/> </a>
        <a href='https://www.instagram.com' target='_blank'> <img width={55} src={instagramIcon} alt='Instagram'/> </a>
        <a href='https://www.github.com' target='_blank'> <img width={55} src={githubIcon} alt='GitHub'/> </a>
        <a href='https://www.whatsapp.com' target='_blank'> <img width={63} src={whatsappIcon} alt='Whatsapp'/> </a>
      </footer>
    </>
  )
}

export default App

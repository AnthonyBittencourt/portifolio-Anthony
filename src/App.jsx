import styles from'./App.module.css'
import fotoperfil from '../public/foto1.png'

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

        <section id="s2">
          <h2>sessao 2</h2>
        </section>

        <section id="s3">
          <h2>sessao 3</h2>
        </section>

        <section id="s4">
          <h2>sessao 4</h2>
        </section>
      </main>
    </>
  )
}

export default App

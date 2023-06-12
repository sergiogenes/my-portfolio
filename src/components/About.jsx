import '../styles/About.css'
import Timeline from './Timeline'
/* import Computer from '../commons/Computer' */

const About = () => {
  return (
    <section id='about'>
      <h1>Acerca de mi...</h1>
      <div className='about_container'>
        {/* <div id='about_text'>
          <p>
            ¡Hola! Mi nombre es Sergio Genes y soy un apasionado por los
            desafíos y la construcción de cosas.
          </p>
          <p>
            Mi primer contacto con la programación fue a la edad de 10 años,
            cuando comencé a experimentar con un lenguaje de dibujo llamado LOGO
            en antiguas computadoras como el Comodore 64. Recuerdo la emoción
            que sentí cuando escribí mi primer "Hello World!!" en Basic y
            descubrí todo lo que podía crear con solo unas líneas de código.
          </p>
          <p>
            Durante la secundaria, me alejé un poco de la programación para
            dedicarme a otra de mis pasiones, las matemáticas. Participé en las
            Olimpiadas Matemáticas Argentinas, donde pude conocer a muchas
            personas apasionadas y desarrollar habilidades como la perseverancia
            y la resolución de problemas. Sin embargo, nunca dejé de lado mi
            interés por la programación.
          </p>
          <p>
            Durante la universidad, retomé mi pasión por la programación y
            comencé a explorar lenguajes de programación como C++, C Builder,
            Assembler y otros lenguajes de bajo nivel para programar
            microcontroladores. Sin embargo, recientemente he decidido hacer un
            cambio en mi carrera profesional y me he embarcado en un bootcamp de
            Javascript para convertirme en Full Stack Developer.
          </p>
          <p>
            Estoy emocionado de continuar aprendiendo y creciendo como
            desarrollador de software y estoy dispuesto a enfrentar nuevos
            desafíos y superar cualquier obstáculo que se presente en el camino.
            Siempre estoy buscando nuevas oportunidades para mejorar mis
            habilidades y trabajar en proyectos que me apasionen. ¡Gracias por
            visitar mi portfolio!
          </p>
        </div> */}
        <Timeline />
        <div className='imageContainer'>
          <img
            src='programmer.png'
            alt='imagen de un programador'
          />
        </div>
      </div>
    </section>
  )
}

export default About

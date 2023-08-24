import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  github,
  figma,
  docker,
  performanceFeedbackFronent,
  performanceFeedbackBackend,
  devGamesFrontend,
  devGamesBackend
} from '../assets/'

const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'GitHub',
    icon: github
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
]

const aboutMe = [
  {
    title: '¡Hola! Mi nombre es Sergio Genes',
    content:
      'Un ingeniero electrónico con pasión por el mundo IT, reinventandose como full stack developer en JavaScript.'
  },
  {
    title: 'Cuando era un niño...',
    content:
      'Mi primer contacto con la programación fue a la edad de 10 años, cuando comencé a experimentar con un lenguaje de dibujo llamado LOGO en antiguas computadoras como el Comodore 64. Recuerdo la emoción que sentí cuando escribí mi primer "Hello World!!" en Basic y descubrí todo lo que podía crear con solo unas líneas de código.'
  },
  {
    title: 'Durante la secundaria...',
    content:
      'Durante la secundaria, me alejé un poco de la programación para dedicarme a otra de mis pasiones, las matemáticas. Participé en las Olimpiadas Matemáticas Argentinas, donde pude conocer a muchas personas apasionadas y desarrollar habilidades como la perseverancia y la resolución de problemas. Sin embargo, nunca dejé de lado mi interés por la programación.'
  },
  {
    title: 'En la Universidad...',
    content:
      'Durante la universidad, retomé mi pasión por la programación y comencé a explorar lenguajes de programación como C++, C++ Builder, Assembler y otros lenguajes de bajo nivel para programar microcontroladores.'
  },
  {
    title: 'Cambio de carrera...',
    content:
      'Sin embargo, recientemente he decidido hacer un cambio en mi carrera profesional y me he embarcado en un bootcamp de Javascript para convertirme en Full Stack Developer.'
  },
  {
    title: 'Mirando al futuro...',
    content:
      'Estoy emocionado de continuar aprendiendo y creciendo como desarrollador de software y estoy dispuesto a enfrentar nuevos desafíos y superar cualquier obstáculo que se presente en el camino. Siempre estoy buscando nuevas oportunidades para mejorar mis habilidades y trabajar en proyectos que me apasionen. ¡Gracias por visitar mi portfolio!'
  }
]

const projects = [
  {
    name: 'DevGames3 - Frontend',
    description:
      'E-commerce dedicado a la venta de videos juegos. Los usuarios tienen la posibilidad de registrarse y crear una cuenta personalizada, lo que les permite acceder a características exclusivas. Una vez registrados, los usuarios pueden iniciar sesión en sus cuentas y disfrutar de la comodidad de administrar su carrito de compras, donde pueden agregar, eliminar y modificar los artículos que deseen adquirir. También permite la búsqueda de un video juego en particular.\n Además, mantenemos un historial de compras detallado para que los usuarios puedan consultar y hacer un seguimiento de sus adquisiciones anteriores. Para brindar un excelente servicio, enviamos a los usuarios comunes un correo electrónico con los detalles de su compra después de que se haya realizado.\nNuestra página web presenta diferentes vistas para usuarios comunes y administradores. Los administradores tienen privilegios adicionales y acceso a un panel de administración exclusivo. Desde esta vista, los administradores pueden crear nuevos juegos, editar la información de los juegos existentes, agregar categorías para facilitar la navegación, actualizar las plataformas disponibles y gestionar los roles de los usuarios. Con tan solo unos clics, los administradores pueden elevar a un usuario común al estado de administrador o revertirlo, brindando flexibilidad en la gestión de permisos.\nEn el frontend, se utilizó React como el framework principal junto con Redux para la gestión del estado de la aplicación. Se utilizó Axios para realizar solicitudes HTTP al servidor y Material UI para crear una interfaz de usuario moderna y atractiva.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Redux',
        color: 'green-text-gradient'
      },
      {
        name: 'Axios',
        color: 'pink-text-gradient'
      },
      {
        name: 'Material UI',
        color: 'blue-text-gradient'
      }
    ],
    image: devGamesFrontend,
    source_code_link:
      'https://github.com/ecommerce-devgames/Frontend/tree/master',
    app_link: 'https://frontend-omega-gules.vercel.app/'
  },
  {
    name: 'DevGames3 - Backend',
    description:
      'Backend de un e-commerce dedicado a la venta de videos juegos.\n En el backend, se utilizó Node.js con Express como el framework principal. La base de datos está impulsada por PostgreSQL y Sequelize como ORM para interactuar con la base de datos.\n Se implementó la autenticación y autorización utilizando JWT, y Bcrypt para el cifrado de contraseñas. Además, se incorporó a Nodemailer para enviar correos electrónicos con los detalles de las compras de los usuarios.\n Para llevar a cabo el proyecto  se ha diseñado cuidadosamente el schema design de los modelos de bases de datos y sus relaciones. Esto nos permite ofrecer todas las funcionalidades clave de la aplicación. Hemos creado una estructura sólida que almacena información vital, como detalles de juegos, usuarios, carritos de compras y registros de compras anteriores.\nPara garantizar la seguridad y la confidencialidad de los datos, se ha implementado variables de entorno en el proyecto. Esto nos ha permitido separar y proteger las variables sensibles, como las credenciales de acceso a la base de datos. Además, al utilizar variables de entorno, hemos facilitado enormemente el proceso de deploy del proyecto, ya que podemos gestionar y modificar estas variables de manera rápida y sencilla sin tener que tocar el código fuente.\nSe ha elegido Vercel como plataforma de deploy para nuestro proyecto. Vercel nos brinda una forma rápida y sencilla de implementar nuestra aplicación en la nube. Con Vercel, se ha podido desplegar nuestro backend de manera eficiente y asegurarnos de que nuestro proyecto esté disponible en todo momento.',
    tags: [
      {
        name: 'Express',
        color: 'blue-text-gradient'
      },
      {
        name: 'PostgreSQL',
        color: 'green-text-gradient'
      },
      {
        name: 'JWT',
        color: 'pink-text-gradient'
      },
      {
        name: 'Bscript',
        color: 'blue-text-gradient'
      },
      {
        name: 'Nodemailer',
        color: 'blue-text-gradient'
      }
    ],
    image: devGamesBackend,
    source_code_link:
      'https://github.com/ecommerce-devgames/Backend/tree/master',
    app_link: 'https://frontend-omega-gules.vercel.app/'
  },
  {
    name: 'Performance Feedback- Frontend',
    description:
      'Performance Feedback es una aplicación web diseñada específicamente para el departamento de Recursos Humanos de una empresa.\nEsta aplicación ofrece dos vistas distintas: una para los empleados y otra para los administradores.\nEn la vista del usuario empleado, la aplicación permite a los empleados registrar, almacenar y consultar las devoluciones realizadas a los colaboradores a su cargo. Además, podrán acceder a sus propios indicadores vigentes del periodo que recibirán retroalimentación de sus superiores al finalizar el periodo y consultar el histórico de feedback recibido en periodos anteriores.\nEn la vista de usuario administrador, los administradores tienen la capacidad de dar de alta, baja y modificar varias tablas, incluyendo usuarios, puestos, categorías, oficinas, indicadores y equipos. En particular, la tabla de equipos permite establecer las relaciones jerárquicas entre los empleados.\nEste proyecto fue desarrollado utilizando Next.js, Redux, Axios, Material UI y Antd, aprovechando las tecnologías más modernas y eficientes para crear una aplicación web sólida y fácil de usar. El proyecto se encuentra desplegado en Vercel, y adjuntaré el enlace al sitio web y al repositorio de GitHub para que puedas explorarlo en detalle.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient'
      },
      {
        name: 'Redux',
        color: 'green-text-gradient'
      },
      {
        name: 'Axios',
        color: 'pink-text-gradient'
      },
      {
        name: 'Material UI',
        color: 'blue-text-gradient'
      }
    ],
    image: performanceFeedbackFronent,
    source_code_link:
      'https://github.com/sergiogenes/PerformanceFeedbackClient/tree/main',
    app_link: 'https://performance-feedback-client.vercel.app/'
  },
  {
    name: 'Performance Feedback - Backend',
    description:
      'Backend de la aplicación Performance Feedback. Se ha desarrollado una API utilizando Node.js y Express como el framework principal. Esta API se integra con una base de datos PostgreSQL y utiliza Sequelize como ORM (Object-Relational Mapping) para interactuar con la base de datos.\n Uno de los aspectos clave del backend es la autenticación de usuarios, para lo cual se implementó una capa de seguridad utilizando JSON Web Tokens (JWT) y bcrypt para asegurar la confidencialidad de las contraseñas de los usuarios. Tambié para garantizar la seguridad y el control de acceso, se implementó middleware para la autenticación de usuarios y la validación de permisos. Esto significa que tanto los administradores como los usuarios empleados tienen restricciones de acceso y acciones permitidas en la aplicación.\nAdemás, se diseñó un esquema de bases de datos que modela adecuadamente las entidades y relaciones necesarias para permitir las funcionalidades de la aplicación.\nOtro aspecto importante es la gestión de variables de entorno, se utilizaron para mantener la confidencialidad de las variables sensibles, como las credenciales de bases de datos. Además, estas variables de entorno facilitan el despliegue de la aplicación, ya que se pueden configurar fácilmente en diferentes entornos de desarrollo, pruebas y producción.\nSe ha elegido Vercel como plataforma de deploy para nuestro proyecto. Vercel nos brinda una forma rápida y sencilla de implementar nuestra aplicación en la nube.',
    tags: [
      {
        name: 'Express',
        color: 'blue-text-gradient'
      },
      {
        name: 'PostgreSQL',
        color: 'green-text-gradient'
      },
      {
        name: 'JWT',
        color: 'pink-text-gradient'
      },
      {
        name: 'Bscript',
        color: 'blue-text-gradient'
      }
    ],
    image: performanceFeedbackBackend,
    source_code_link:
      'https://github.com/sergiogenes/PerformanceFeedbackServer/tree/main',
    app_link: 'https://performance-feedback-server.vercel.app/'
  }
]

export { navLinks, technologies, aboutMe, projects }

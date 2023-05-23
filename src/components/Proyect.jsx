import "../styles/Proyect.css";

const Proyect = () => {
  return (
    <section id="projects">
      <h2>These are some of my projects</h2>
      <div className="container-projects">
        <a
          className="project-tile"
          href="https://genuine-fenglisu-f363db.netlify.app/"
          target="_blank"
        >
          <figure>
            <img
              src="https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_1.png?raw=true"
              alt="Imaje of the a proyect N°1"
            />
            <figcaption>Use CSS Transforms by Building a Penguin</figcaption>
          </figure>
        </a>
        <a
          className="project-tile"
          href="https://jade-monstera-73b432.netlify.app"
          target="_blank"
        >
          <figure>
            <img
              src="https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_2.png?raw=true"
              alt="Imaje of the a proyect N°2"
            />
            <figcaption>Product Landing Page</figcaption>
          </figure>
        </a>
        <a
          className="project-tile"
          href="https://frolicking-valkyrie-afa707.netlify.app"
          target="_blank"
        >
          <figure>
            <img
              src="https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_3.png?raw=true"
              alt="Imaje of the a proyect N°3"
            />
            <figcaption>Using CSS Grid to build a web page.</figcaption>
          </figure>
        </a>
        <a
          className="project-tile"
          href="https://sparkly-brigadeiros-1e6a06.netlify.app"
          target="_blank"
        >
          <figure>
            <img
              src="https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_4.png?raw=true"
              alt="Imaje of the a proyect N°4"
            />
            <figcaption>
              Using CSS variables to build a city skyline.
            </figcaption>
          </figure>
        </a>
        <a
          className="project-tile"
          href="https://superb-brigadeiros-043459.netlify.app"
          target="_blank"
        >
          <figure>
            <img
              src="https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_5.png?raw=true"
              alt="Imaje of the a proyect N°5"
            />
            <figcaption>
              Using CSS pseudo selectors to build a balance sheet.
            </figcaption>
          </figure>
        </a>
        <a className="project-tile" href="#welcome-section">
          <figure>
            <img
              src="https://github.com/sergiogenes/Proyecto_images/blob/main/Proyecto_6.png?raw=true"
              alt="Imaje of the a proyect N°6"
            />
            <figcaption>building a portfolio.</figcaption>
          </figure>
        </a>
      </div>
      <button>
        <a href="https://www.github.com" target="_blank">
          Show all<i className="fas fa-chevron-right"></i>
        </a>
      </button>
    </section>
  );
};

export default Proyect;

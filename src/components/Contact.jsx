import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div id="contact-title">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div id="contact-links">
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blanck">
              <i className="fa-brands fa-square-facebook"> </i> Facebook
            </a>
          </li>
          <li>
            <a id="profile-link" href="https://www.github.com/" target="_blank">
              <i className="fa-brands fa-square-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blanck">
              <i className="fa-brands fa-square-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="mailto:genessergio@gmail.com">
              <i className="fa-solid fa-square-envelope"></i> Send a mail
            </a>
          </li>
          <li>
            <a href="tel:+54 911 1111 1111">
              <i className="fa-solid fa-mobile-screen"></i> Call me
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;

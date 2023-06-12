import '../styles/Contact.css'
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMailFast
} from '@tabler/icons-react'
import FormContact from './FormContact'

const Contact = () => {
  return (
    <section id='contact'>
      <div id='contact-title'>
        <h2>Trabajemos juntos...</h2>
        <p>Como me puedes contactar?</p>
      </div>
      <FormContact />
      <div id='contact-links'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/sergio-genes/'
              target='_blanck'
            >
              <IconBrandLinkedin
                width='28'
                height='28'
              />
              Linkedin
            </a>
          </li>
          <li>
            <a
              id='profile-link'
              href='https://github.com/sergiogenes'
              target='_blank'
              rel='noreferrer'
            >
              <IconBrandGithub
                width='28'
                height='28'
              />
              GitHub
            </a>
          </li>
          <li>
            <a href='mailto:genessergio@gmail.com'>
              <IconMailFast
                width='32'
                height='32'
              />
              Send a mail
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact

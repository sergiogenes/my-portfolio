import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import '../styles/FormContact.css'

const FormContact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // templateId: template_o6v19jk
  // serviceID: service_zl87lr4
  // Public key: t5R3eYXVjhOLW2Jft

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .send(
        'service_zl87lr4',
        'template_o6v19jk',
        {
          from_name: form.name,
          to_name: 'Sergio Genes',
          from_email: form.email,
          to_email: 'genessergio@gmail.com',
          message: form.message
        },
        't5R3eYXVjhOLW2Jft'
      )
      .then(() => {
        setLoading(false)
        alert(
          'Muchas gracias por tu Mensaje. Me contactaré contigo lo antes posible!'
        )
        setForm({
          name: '',
          email: '',
          message: ''
        })
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
        alert('Lo siento, algo no ha funcionado correctamente =(')
      })
  }

  return (
    <div className='formContainer'>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label>
          <span>Nombre:</span>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='¿Cuál es tu nombre?'
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='¿Cuál es tu email?'
            required
          />
        </label>
        <label>
          <span>Mensaje:</span>
          <textarea
            rows='7'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='¿Cuál es el mensaje?'
            required
          />
        </label>
        <button type='submit'>{loading ? 'Enviando...' : 'Enviar'}</button>
      </form>
    </div>
  )
}
export default FormContact

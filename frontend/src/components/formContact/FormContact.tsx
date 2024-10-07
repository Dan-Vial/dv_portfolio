import { FormEvent, useEffect, useRef, useState } from 'react'
import './FormContact.sass'
import ReCAPTCHA from 'react-google-recaptcha'

function FormContact() {
  const recaptcha = useRef<ReCAPTCHA>(null)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [msg, setMsg] = useState<string>('')
  const [rgpd, setRgpd] = useState<boolean>(false)
  const [emailSended, setEmailSended] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formDom: EventTarget & HTMLFormElement = event.currentTarget

    if (formDom.reportValidity() && recaptcha.current?.getValue() && rgpd) {
      const postMail = await fetch('/mail', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            'name': name,
            'email': email,
            'message': msg
          }
        }),
      })
      const rep = await postMail.json()

      if (rep.msg) {
        setEmailSended(true)
      }
    }
  }

  function clear() {
    recaptcha.current?.reset()
    setName('')
    setEmail('')
    setMsg('')
    setRgpd(false)
    setEmailSended(false)
  }

  useEffect(() => {
    if (emailSended) {
      clear()
    }
  }, [emailSended])

  return (
    <form onSubmit={handleSubmit} className={'form-contact'} >
      <label htmlFor="name">Nom</label>
      <input onChange={(event) => { setName(event.target.value) }} value={name} type="text" name="name" id="name" autoComplete="name" minLength={3} required></input>

      <label htmlFor="email">Email</label>
      <input onChange={(event) => { setEmail(event.target.value) }} value={email} type="email" name="email" id="email" autoComplete="email" required></input>

      <label htmlFor="message">Message</label>
      <textarea onChange={(event) => { setMsg(event.target.value) }} value={msg} name="message" id="message" cols={30} rows={10} required></textarea>

      <div>
        <label htmlFor="rgpd">RGPD </label>
        <input onChange={(event) => { setRgpd(event.target.checked) }} checked={rgpd} className='form-contact__height1' type="checkbox" name="rgpd" id="rgpd" required />
        <a className='form-contact__a' href="/politique-de-confidentialite">Politique de confidentialité</a>
      </div>

      <ReCAPTCHA
        ref={recaptcha}
        sitekey={'6LdIUkwqAAAAABjWzqo6zJBc-YuUL2CKYlhY5u_q'}
      />

      <input className={'button'} type="submit" value="Envoyer"></input>
    </form >
  )
}

export default FormContact

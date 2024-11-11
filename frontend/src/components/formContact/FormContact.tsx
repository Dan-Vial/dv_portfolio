import { FormEvent, useEffect, useRef, useState } from 'react'
import './FormContact.sass'
import ReCAPTCHA, { ReCAPTCHARef } from '@components/reCAPTCHA/ReCAPTCHA'

function FormContact() {
  const recaptchaRef = useRef<ReCAPTCHARef | null>(null)
  const [recaptchaVerify, setRecaptchaVerify] = useState<boolean>(false)

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [msg, setMsg] = useState<string>('')
  const [rgpd, setRgpd] = useState<boolean>(false)
  const [emailSended, setEmailSended] = useState<boolean>(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (event.currentTarget.reportValidity()) {
      const recaptchaToken = recaptchaRef.current?.getValue()
      if (recaptchaToken && recaptchaVerify) {
        try {
          async function fetching() {
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
            const rep = await postMail.json() as { msg: string }
            if (rep.msg) {
              setEmailSended(true)
            } else {
              console.error('Échec de l\'envoi de l\'email:', rep)
            }
          }

          void fetching()
        } catch (error) {
          console.error('Erreur lors de l\'envoi de l\'email:', error)
        }
      } else {
        console.warn('Le token reCAPTCHA est manquant, expiré ou invalide.')
      }
    }
  }

  function clear() {
    recaptchaRef.current?.reset()
    setName('')
    setEmail('')
    setMsg('')
    setRgpd(false)
    setEmailSended(false)
  }

  function handleVerify(token: string | null) {
    if (token) {
      setRecaptchaVerify(true)
    } else {
      setRecaptchaVerify(false)
    }
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
      <textarea onChange={(event) => { setMsg(event.target.value) }} value={msg} name="message" id="message" cols={30} rows={10} spellCheck={true} required></textarea>

      <div>
        <label htmlFor="rgpd">RGPD </label>
        <input onChange={(event) => { setRgpd(event.target.checked) }} checked={rgpd} className='form-contact__height1' type="checkbox" name="rgpd" id="rgpd" required />
        <a className='form-contact__a' href="/politique-de-confidentialite">Politique de confidentialité</a>
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        siteKey={'6LffLnkqAAAAAIxGhw95dDCN4sawgm1DuZu82x2b'}
        handleExpired={handleVerify}
      />

      <input className={'button'} type="submit" value="Envoyer"></input>
    </form >
  )
}

export default FormContact
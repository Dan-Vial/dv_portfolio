import './FormContact.sass'

function FormContact() {
  return (
    < form className={'form-contact'} >
      <label htmlFor="name">Nom</label>
      <input type="text" name="name" id="name" autoComplete="name"></input>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" autoComplete="email"></input>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" cols={30} rows={10}></textarea>
      <input className={'button button-disabled'} type="submit" value="Envoyer"></input>
    </form >
  )
}

export default FormContact

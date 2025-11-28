import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.contact__h2}>Contato</h2>

      <div className={styles.contact__content}>

        <div className={styles.contact__ways}>
          <h3>Entre em contato conosco</h3>
          <p><i className="fa-regular fa-envelope"></i> seuemail@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> 37 9 98743132</p>
        </div>

        <form className={styles.contact__form}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
import styles from './Btnzap.module.css'

function Btnzap({number = "https://wa.link/lmigqq"}) {
  return (
    <a href={number} target='blank__' className={styles.whatssap}><i className="fa-brands fa-whatsapp"></i></a>
  )
}

export default Btnzap
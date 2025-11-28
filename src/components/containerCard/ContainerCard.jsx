import { useContext } from 'react';
import { GlobalContext } from '../../GlobalStorage'
import Card from '../card/Card'
import styles from './ContainerCard.module.css'

function ContainerCard() {

  const {data} = useContext(GlobalContext);

  return (
    <section className={styles.background} id="catalogue">
      <h2 className={styles.containerCard__title}>Catálogo</h2>
        <div className={styles.containerCard}>
          {data?.shoes__list?.map(({name,image,price_prev,price, id}) => (
            <Card name={name} image={image} price__prev={price_prev} price__now={price} id={id} obj={{name,image,price}} key={id}/>
          ))}
        </div>
    </section>
  )
}

export default ContainerCard
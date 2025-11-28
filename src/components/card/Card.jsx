import { useContext, useRef } from "react"
import styles from "./Card.module.css"
import { GlobalContext } from "../../GlobalStorage"

function Card({ name, image, price__prev, price__now, id, obj }) {
    const { addToCart } = useContext(GlobalContext)

    return (
        <article className={styles.card} id={id} data-obj={JSON.stringify(obj)}>
            <figure className={styles.card__figure}>
                <img src={image} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
            <div className={styles.card__price}>
                <s className={styles.card__pricePrev}>{price__prev}</s>
                <span className={styles.card__priceNow}>{price__now}</span>
            </div>
            <button className={styles.card__btnBuy}>comprar</button>
            <button
                className={styles.card__addToCart}
                onClick={(e) =>addToCart(JSON.parse(e.currentTarget.parentElement.dataset.obj)) }
            >ADD
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </article>
    )
}

export default Card
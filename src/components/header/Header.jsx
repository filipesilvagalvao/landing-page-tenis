import { useContext, useState } from "react"
import styles from "./Header.module.css"
import { GlobalContext } from "../../GlobalStorage"

function Header() {
    const [openCart, setOpenCart] = useState(false);
    const { cart, removeFromCart } = useContext(GlobalContext)

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <input type="checkbox" id="hamburger" className={styles.checkbox} />

                <label htmlFor="hamburger" className={styles.header__hamBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <h1 className={styles.header__logo}>My Logo</h1>

                <nav className={styles.header__navMenu}>
                    <a href="#home" className={styles.header__navLink}>Início</a>
                    <a href="#catalogue" className={styles.header__navLink}>Catálogo</a>
                    <a href="#about" className={styles.header__navLink}>Sobre nós</a>
                    <a href="#faq" className={styles.header__navLink}>FAQ</a>
                    <a href="#contact" className={styles.header__navLink}>Contato</a>
                </nav>
                <div className={styles.header__shoppingCart}>
                    <button onClick={() => setOpenCart(!openCart)}><i className="fa-solid fa-cart-shopping"></i></button>
                    <span className={styles.header__qtdItemCart}>{cart.length}</span>


                    <ul className={styles.header__cartList + ` ${openCart ? styles.header__cartListVisible : ''}`}>

                        {cart.length > 0 ? cart.map((item, index) => (
                            <li className={styles.header__cartItem} key={index}>
                                <div className={styles.header__cartItemInfo}>
                                    <img src={item.image} alt={item.name} />
                                    <p className={styles.header__cartItemInfoPrice}>{item.price}</p>
                                    <p className={styles.header__cartItemInfoName} title={item.name}>{item.name}</p>
                                </div>

                                <div className={styles.header__cartItemQty}>
                                    <button onClick={()=>removeFromCart(item)}>-</button>
                                </div>
                            </li>
                        )) : <li className={styles.header__noItem}>Sem items no carrinho</li>}

                        {cart.length > 0 && <li className={styles.header__totalItem}><span>Total: {cart.reduce((acum, item)=>acum + item.price,0).toFixed(2)} </span> <button>Chechout</button></li>}
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header
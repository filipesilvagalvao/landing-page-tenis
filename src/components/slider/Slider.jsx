import { useContext, useRef} from "react"
import styles from "./Slider.module.css"
import { GlobalContext } from "../../GlobalStorage"

function Slider() {
    const {data} = useContext(GlobalContext)

    const containerImg = useRef(null)
    const containerText = useRef(null)

    function putImg(index) {
        containerImg.current.innerHTML = `<img src=${data?.top__shoes[index]?.image} class="slider__img" id=${data?.top__shoes[index]?.id}/>`

        containerText.current.innerHTML = `<h2>${data?.top__shoes[index].name}</h2>
        <p>${data?.top__shoes[index].meta__description}</p>
        <button>Comprar</button>`
    }

    return (
        <section className={styles.slider} id="home">

            <div className={styles.slider__text} ref={containerText}>

                <h2>{data?.top__shoes[0]?.name}</h2>

                <p>{data?.top__shoes[0]?.meta__description}</p>

                <button>Comprar</button>

            </div>

            <div className={styles.slider__content}>

                <div ref={containerImg} className={styles.slider__contentImg}>
                    <img src={data?.top__shoes[0]?.image} alt={data?.top__shoes[0]?.name} className="slider__img" id={data?.top__shoes[0]?.id}/>
                </div>

                <div className={styles.slider__contentBtns}>
                    <button onClick={() => putImg(0)}><img src={data?.top__shoes[0]?.image} alt="img tenis"/></button>
                    <button onClick={() => putImg(1)}><img src={data?.top__shoes[1]?.image} alt="img tenis"/></button>
                    <button onClick={() => putImg(2)}><img src={data?.top__shoes[2]?.image} alt="img tenis"/></button>
                </div>
            </div>
        </section>
    )
}

export default Slider
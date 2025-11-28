import styles from './Faq.module.css'

function Faq() {
    return (
        <section className={styles.faq} id="faq">
            <h2 className={styles.faq__title}>Faq</h2>

            <div className={styles.faq__container}>

                <details className={styles.faq__item}>
                    <summary className={styles.faq__sumary}>Accordion Item 1</summary>
                    <p>This is the hidden content that appears when clicked.</p>
                </details>

                <details className={styles.faq__item}>
                    <summary className={styles.faq__sumary}>Accordion Item 2</summary>
                    <p>This is the hidden content that appears when clicked.</p>
                </details>

                <details className={styles.faq__item}>
                    <summary className={styles.faq__sumary}>Accordion Item 3</summary>
                    <p>This is the hidden content that appears when clicked.</p>
                </details>

                <details className={styles.faq__item}>
                    <summary className={styles.faq__sumary}>Accordion Item 4</summary>
                    <p>This is the hidden content that appears when clicked.</p>
                </details>

                

            </div>

        </section>
    )
}

export default Faq
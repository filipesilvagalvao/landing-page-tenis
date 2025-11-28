import styles from "./About.module.css"

function About() {
    return (
        <section className={styles.about} id="about">

            <h2 className={styles.about__title}>Sobre</h2>

            <div className={styles.about__container}>

                <div className={styles.about_video}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Td5mcSLG668?si=UiGXCgS2to2Rd9cu"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className={styles.about__text}>
                    <h3>Quem somos?</h3>
                    <p>Bem-vindo à nossa loja de tênis. Somos especializados em oferecer os melhores modelos de calçados esportivos com qualidade, conforto e estilo. Nossa missão é proporcionar a melhor experiência de compra para atletas e entusiastas de tênis.</p>

                    <p>Nossa equipe é apaixonada por tênis e está sempre atualizada com as últimas tendências do mercado. Trabalhamos com as principais marcas para garantir que nossos clientes tenham acesso aos produtos mais inovadores e de alta performance.</p>
                </div>
            </div>
        </section>
    )
}

export default About
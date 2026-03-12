import React from 'react'
import styles from './LandingPage.module.css'

const LandingPage = ({ onStart }) => {
    return (
        <div className={styles.landingContainer}>
            {/* Fundo com parallax */}
            <div className={styles.backgroundLayers}>
                <div className={`${styles.parallaxLayer} ${styles.layer1}`}></div>
                <div className={`${styles.parallaxLayer} ${styles.layer2}`}></div>
                <div className={`${styles.parallaxLayer} ${styles.layer3}`}></div>
            </div>

            {/* Conteúdo principal */}
            <div className={styles.content}>
                {/* Skate realista animado */}
                <div className={styles.characterContainer}>
                    <div className={styles.skateboard}>
                        {/* Prancha (deck) */}
                        <div className={styles.deck}>
                            <div className={styles.deckGrip}></div>
                        </div>
                        {/* Eixo frontal */}
                        <div className={styles.truckFront}>
                            <div className={styles.truckBase}></div>
                            <div className={styles.wheelFront1}></div>
                            <div className={styles.wheelFront2}></div>
                        </div>
                        {/* Eixo traseiro */}
                        <div className={styles.truckBack}>
                            <div className={styles.truckBase}></div>
                            <div className={styles.wheelBack1}></div>
                            <div className={styles.wheelBack2}></div>
                        </div>
                    </div>

                    {/* Aura ao redor do personagem */}
                    <div className={styles.aura}></div>
                </div>

                {/* Texto principal */}
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        <span className={styles.titleWord}>João</span>
                        <span className={styles.titleWord}>Victor</span>
                    </h1>

                    <p className={styles.subtitle}>Frontend Developer | React & JavaScript</p>

                    <p className={styles.description}>
                        Desenvolvedor web apaixonado por criar interfaces modernas e soluções bem estruturadas.
                        Explore meu portfólio interativo e descubra meus projetos, habilidades e como você pode trabalhar comigo.
                    </p>

                    {/* Quick Links */}
                    <div className={styles.quickLinks}>
                        <a
                            href="https://github.com/JoaoVictorMatos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.quickLink}
                            title="Meu GitHub"
                        >
                            🐙
                        </a>
                        <a
                            href="https://www.linkedin.com/in/joaomatos02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.quickLink}
                            title="Meu LinkedIn"
                        >
                            💼
                        </a>
                        <a
                            href="mailto:joao.digivendas@gmail.com"
                            className={styles.quickLink}
                            title="Enviar email"
                        >
                            ✉️
                        </a>
                    </div>

                    {/* Botão de iniciar */}
                    <button className={styles.startButton} onClick={onStart}>
                        <span className={styles.buttonText}>INICIAR JOGO</span>
                        <span className={styles.buttonIcon}>▶</span>
                    </button>

                    {/* Indicador de interatividade */}
                    <div className={styles.hint}>
                        Clique para começar uma aventura interativa...
                    </div>
                </div>
            </div>

            {/* Efeitos decorativos */}
            <div className={styles.stars}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.star}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Partículas flutuantes */}
            <div className={styles.particles}>
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.particle}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default LandingPage

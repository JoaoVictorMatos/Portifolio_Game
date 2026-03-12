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

                    <p className={styles.subtitle}>Desenvolvedor Web</p>

                    <p className={styles.description}>
                        Bem-vindo à minha jornada! Aqui você encontrará meus projetos, habilidades e histórias
                        de desenvolvimento. Prepare-se para uma aventura interativa!
                    </p>

                    {/* Botão de iniciar */}
                    <button className={styles.startButton} onClick={onStart}>
                        <span className={styles.buttonText}>INICIAR JOGO</span>
                        <span className={styles.buttonIcon}>▶</span>
                    </button>

                    {/* Indicador de interatividade */}
                    <div className={styles.hint}>
                        Clique para começar...
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

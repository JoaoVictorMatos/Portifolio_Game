import React from 'react'
import styles from './GameBackground.module.css'

const GameBackground = ({ playerPosition = 0 }) => {
    return (
        <div className={styles.bgContainer}>
            {/* Céu */}
            <div className={styles.sky}></div>

            {/* Nuvens parallax */}
            <div
                className={styles.cloudsLayer}
                style={{ transform: `translateX(${playerPosition * -0.3}%)` }}
            >
                <div className={styles.cloud}></div>
                <div className={styles.cloud} style={{ left: '30%' }}></div>
                <div className={styles.cloud} style={{ left: '60%' }}></div>
                <div className={styles.cloud} style={{ left: '90%' }}></div>
            </div>

            {/* Montanhas distantes */}
            <div
                className={styles.mountainsDistant}
                style={{ transform: `translateX(${playerPosition * -0.2}%)` }}
            ></div>

            {/* Plataformas e terreno */}
            <div className={styles.terrain}>
                <div className={styles.ground}></div>
                <div className={styles.platform1}></div>
                <div className={styles.platform2}></div>
                <div className={styles.platform3}></div>
                <div className={styles.platform4}></div>
            </div>

            {/* Efeitos de luz */}
            <div className={styles.lightRays}></div>

            {/* Decoração - Árvores/arbustos */}
            <div
                className={styles.decorations}
                style={{ transform: `translateX(${playerPosition * -0.4}%)` }}
            >
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.decoration}
                        style={{ left: `${i * 25}%` }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default GameBackground

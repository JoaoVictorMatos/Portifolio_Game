import React, { useMemo } from 'react'
import styles from './Player.module.css'

const Player = ({ position = 0, isWalking = false }) => {
    const containerStyle = useMemo(() => ({
        left: `${position}%`,
    }), [position])

    return (
        <div className={styles.playerContainer} style={containerStyle}>
            <div className={`${styles.skateboard} ${isWalking ? styles.riding : ''}`}>
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
                {/* Shadow */}
                <div className={styles.shadow}></div>
            </div>
        </div>
    )
}

export default Player

import React from 'react'
import styles from './StageMarker.module.css'

const StageMarker = ({ stage, playerPosition, isNearby, onInteract }) => {
    const containerStyle = {
        left: `${stage.position}%`,
    }

    const handleClick = () => {
        onInteract(stage.id)
    }

    return (
        <div
            className={`${styles.stageMarker} ${isNearby ? styles.nearby : ''}`}
            style={containerStyle}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            aria-label={`Fase: ${stage.title}`}
            onKeyPress={(e) => e.key === 'Enter' && handleClick()}
        >
            {/* Aura de proximidade */}
            {isNearby && <div className={styles.proximityAura}></div>}

            {/* Flag/marcador */}
            <div className={styles.flag}>
                <div className={styles.flagPole}></div>
                <div className={styles.flagContent}>
                    <div className={styles.flagIcon}>{stage.icon}</div>
                    <div className={styles.flagLabel}>{stage.shortTitle}</div>
                </div>
            </div>

            {/* Base/pedestal */}
            <div className={styles.base}></div>

            {/* Tooltip */}
            {isNearby && (
                <div className={styles.tooltip}>
                    <div className={styles.tooltipTitle}>{stage.title}</div>
                    <div className={styles.tooltipDescription}>{stage.description}</div>
                </div>
            )}
        </div>
    )
}

export default StageMarker

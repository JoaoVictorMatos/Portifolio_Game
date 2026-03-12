import React from 'react'
import styles from './SkillCard.module.css'

/**
 * Componente de Card para Skills
 * Exibe uma habilidade com barra de progresso visual
 */
const SkillCard = ({ skill, animated = true }) => {
    return (
        <div className={`${styles.skillCard} ${animated ? styles.animated : ''}`}>
            <div className={styles.skillHeader}>
                <span className={styles.icon}>{skill.icon}</span>
                <h4 className={styles.skillName}>{skill.name}</h4>
            </div>

            <div className={styles.skillBar}>
                <div
                    className={styles.skillProgress}
                    style={{
                        width: `${skill.level}%`,
                        animationDelay: `${skill.name.charCodeAt(0) * 0.05}s`,
                    }}
                />
            </div>

            <span className={styles.skillLevel}>{skill.level}%</span>
        </div>
    )
}

export default SkillCard

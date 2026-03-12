import React from 'react'
import { aboutData } from '../../data/projectsData'
import styles from './AboutSection.module.css'

const AboutSection = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.introductionBox}>
                <p className={styles.introduction}>{aboutData.introduction}</p>
            </div>

            <div className={styles.mainText}>
                {aboutData.mainText.split('\n').map((paragraph, idx) => (
                    paragraph.trim() && (
                        <p key={idx}>{paragraph.trim()}</p>
                    )
                ))}
            </div>

            <div className={styles.highlightsGrid}>
                {aboutData.highlights.map((highlight, idx) => (
                    <div key={idx} className={styles.highlightCard}>
                        <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                        <p className={styles.highlightDescription}>{highlight.description}</p>
                    </div>
                ))}
            </div>

            <div className={styles.ctaBox}>
                <p>Vamos trabalhar juntos em projetos incríveis!</p>
            </div>
        </div>
    )
}

export default AboutSection

import React from 'react'
import { skillsData } from '../../data/projectsData'
import styles from './SkillsSection.module.css'

const SkillsSection = () => {
    const categories = Object.values(skillsData)

    return (
        <div className={styles.skillsContainer}>
            <div className={styles.intro}>
                <p>Meu arsenal de tecnologias e competências:</p>
            </div>

            <div className={styles.categoriesGrid}>
                {categories.map((category) => (
                    <div key={category.category} className={styles.categorySection}>
                        <div className={styles.categoryHeader}>
                            <span className={styles.categoryIcon}>{category.icon}</span>
                            <h3 className={styles.categoryTitle}>{category.category}</h3>
                        </div>

                        <div className={styles.skillsList}>
                            {category.skills.map((skill) => (
                                <div key={skill.name} className={styles.skillItem}>
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillIcon}>{skill.icon}</span>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </div>

                                    <div className={styles.skillBarContainer}>
                                        <div
                                            className={styles.skillBar}
                                            style={{
                                                width: `${skill.level}%`,
                                                backgroundColor: `hsl(${skill.level * 1.2}, 70%, 60%)`
                                            }}
                                        ></div>
                                    </div>

                                    <div className={styles.skillLevel}>{skill.level}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.noteBox}>
                <p>💡 Sempre aprendendo novas tecnologias e aperfeiçoando minhas habilidades!</p>
            </div>
        </div>
    )
}

export default SkillsSection

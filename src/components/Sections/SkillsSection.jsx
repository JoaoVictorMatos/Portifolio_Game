import React from 'react'
import { skillsData } from '../../data/skillsData'
import SkillCard from '../Cards/SkillCard'
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
                            <div className={styles.categoryInfo}>
                                <h3 className={styles.categoryTitle}>{category.category}</h3>
                                {category.description && (
                                    <p className={styles.categoryDescription}>{category.description}</p>
                                )}
                            </div>
                        </div>

                        <div className={styles.skillsList}>
                            {category.skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} animated={true} />
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

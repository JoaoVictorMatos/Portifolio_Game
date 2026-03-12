import React from 'react'
import { projectsData } from '../../data/projectsData'
import ProjectCard from '../Cards/ProjectCard'
import styles from './ProjectsSection.module.css'

const ProjectsSection = () => {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.intro}>
                <p>Alguns projetos que desenvolvi ao longo da minha jornada:</p>
            </div>

            <div className={styles.projectsList}>
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        isHighlighted={index === 0}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection

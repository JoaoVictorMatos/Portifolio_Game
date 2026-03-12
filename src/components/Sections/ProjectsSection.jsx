import React, { useState } from 'react'
import { projectsData } from '../../data/projectsData'
import styles from './ProjectsSection.module.css'

const ProjectsSection = () => {
    const [expandedProject, setExpandedProject] = useState(null)

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.intro}>
                <p>Alguns projetos que desenvolvi ao longo da minha jornada:</p>
            </div>

            <div className={styles.projectsList}>
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className={`${styles.projectCard} ${expandedProject === project.id ? styles.expanded : ''}`}
                    >
                        <div className={styles.projectHeader}>
                            <div className={styles.projectTitleBox}>
                                <span className={styles.projectImage}>{project.image}</span>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <span className={styles.stageBadge}>{project.stage}</span>
                            </div>

                            <button
                                className={styles.expandButton}
                                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                                aria-label={`${expandedProject === project.id ? 'Fechar' : 'Expandir'} detalhes do projeto`}
                            >
                                {expandedProject === project.id ? '▼' : '▶'}
                            </button>
                        </div>

                        {expandedProject === project.id && (
                            <div className={styles.projectDetails}>
                                <div className={styles.detailSection}>
                                    <h4>Descrição</h4>
                                    <p>{project.longDescription}</p>
                                </div>

                                <div className={styles.detailSection}>
                                    <h4>Desafio Resolvido</h4>
                                    <p>{project.challengeSolved}</p>
                                </div>

                                <div className={styles.detailSection}>
                                    <h4>Stack Utilizada</h4>
                                    <div className={styles.techStack}>
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className={styles.techBadge}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.detailSection}>
                                    <h4>Informações</h4>
                                    <div className={styles.infoGrid}>
                                        <div>
                                            <span className={styles.infoLabel}>Papel:</span>
                                            <span className={styles.infoValue}>{project.role}</span>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Duração:</span>
                                            <span className={styles.infoValue}>{project.duration}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.projectLinks}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        🐙 GitHub
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                            🚀 Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection

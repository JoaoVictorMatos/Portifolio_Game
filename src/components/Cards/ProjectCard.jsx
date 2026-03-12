import React from 'react'
import styles from './ProjectCard.module.css'

/**
 * Componente de Card para Projetos
 * Exibe informações estruturadas de um projeto com links
 */
const ProjectCard = ({ project, isHighlighted = false }) => {
    return (
        <div className={`${styles.card} ${isHighlighted ? styles.highlighted : ''}`}>
            {/* Image/Icon */}
            <div className={styles.cardImage}>
                <span role="img" aria-label={project.title}>{project.image}</span>
            </div>

            {/* Content */}
            <div className={styles.cardContent}>
                <h3 className={styles.title}>{project.title}</h3>

                <p className={styles.description}>{project.description}</p>

                {/* Technologies */}
                <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                        <span key={tech} className={styles.tech}>
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Challenge Solved */}
                {project.challengeSolved && (
                    <div className={styles.challenge}>
                        <small>💡 {project.challengeSolved}</small>
                    </div>
                )}
            </div>

            {/* Footer com links */}
            <div className={styles.cardFooter}>
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        title="Ver código no GitHub"
                    >
                        🐙 Código
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                        title="Ver demonstração"
                    >
                        🔗 Demo
                    </a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard

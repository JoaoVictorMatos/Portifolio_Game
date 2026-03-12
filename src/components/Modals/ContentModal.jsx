import React, { lazy, Suspense } from 'react'
import AboutSection from '../Sections/AboutSection'
import SkillsSection from '../Sections/SkillsSection'
import ProjectsSection from '../Sections/ProjectsSection'
import ContactSection from '../Sections/ContactSection'
import styles from './ContentModal.module.css'

const ContentModal = ({ stage, onClose }) => {
    const renderContent = () => {
        switch (stage.id) {
            case 'about':
                return <AboutSection />
            case 'skills':
                return <SkillsSection />
            case 'projects':
                return <ProjectsSection />
            case 'contact':
                return <ContactSection />
            default:
                return <div>Conteúdo não disponível</div>
        }
    }

    return (
        <>
            {/* Backdrop */}
            <div className={styles.backdrop} onClick={onClose}></div>

            {/* Modal */}
            <div className={styles.modal}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.titleContainer}>
                        <span className={styles.icon}>{stage.icon}</span>
                        <h2 className={styles.title}>{stage.title}</h2>
                    </div>
                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Fechar"
                    >
                        ✕
                    </button>
                </div>

                {/* Conteúdo */}
                <div className={styles.content}>
                    <Suspense fallback={<div>Carregando...</div>}>
                        {renderContent()}
                    </Suspense>
                </div>

                {/* Footer com dica */}
                <div className={styles.footer}>
                    <p>Pressione ESC ou clique fora para voltar</p>
                </div>
            </div>
        </>
    )
}

export default ContentModal

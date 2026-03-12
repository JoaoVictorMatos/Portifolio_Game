import React from 'react'
import { contactData } from '../../data/contactData'
import styles from './ContactSection.module.css'

const ContactSection = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.intro}>
                <h3>{contactData.title}</h3>
                <p>{contactData.subtitle}</p>
            </div>

            <div className={styles.contactsList}>
                {contactData.contacts.map((contact) => (
                    <a
                        key={contact.type}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactItem}
                    >
                        <div className={styles.contactIcon}>{contact.icon}</div>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactType}>{contact.label}</div>
                            <div className={styles.contactValue}>{contact.display}</div>
                        </div>
                        <div className={styles.arrowIcon}>→</div>
                    </a>
                ))}
            </div>

            <div className={styles.ctaBox}>
                <p className={styles.ctaText}>{contactData.cta}</p>
                <p className={styles.ctaSubtext}>Seja para projeto, dúvida ou apenas uma conversa!</p>
            </div>

            <div className={styles.socialCallout}>
                <p>Conecte-se comigo nas redes sociais para acompanhar meu desenvolvimento!</p>
            </div>
        </div>
    )
}

export default ContactSection

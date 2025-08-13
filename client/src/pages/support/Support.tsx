import styles from './support.module.css';
import phoneIcon from './../../assets/main_icons/phone.svg';
import questionMark from './../../assets/main_icons/question.svg';
import emailIcon from './../../assets/addnewpost_icons/cancel.svg'; // Потрібно додати іконки
import subjectIcon from './../../assets/F.svg'; // Потрібно додати іконки
import sendIcon from './../../assets/F.svg'; // Потрібно додати іконки

import type { SwipeableHandlers } from 'react-swipeable';

type HelpAndSupportProps = {
    handlers: SwipeableHandlers;
}

const HelpAndSupport = ({ handlers }: HelpAndSupportProps) => {

    const faqs = [
        {
            question: 'How do I change my password?',
            answer: 'To change your password, go to your Profile Settings, select the "Security" tab, and follow the instructions to set a new password.'
        },
        {
            question: 'How can I delete my account?',
            answer: 'We\'re sorry to see you go! To delete your account, please contact our support team through the form on this page, and we will process your request.'
        },
        {
            question: 'Can I recover a deleted post?',
            answer: 'Unfortunately, once a post is deleted, it cannot be recovered at this time. Please be careful when deleting your content.'
        },
        {
            question: 'How do I report a problem or a bug?',
            answer: 'If you encounter a technical issue, please describe it in as much detail as possible in the contact form below. Our team will look into it promptly.'
        }
    ];

    return (
        <div {...handlers} className={styles.help}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__content}>
                        <h3>Help & Support</h3>
                        <div className={styles.headerActions}>
                            <button><img src={phoneIcon} alt="numbers button" /></button>
                            <button><img src={questionMark} alt="questions?" /></button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.introDetails}>
                    <div className={styles.introDetails__text}>
                        <h3>Welcome to our Support Center</h3>
                        <p>Find answers to common questions or submit a new ticket</p>
                    </div>
                </div>

                <div className={`${styles.faqSection} ${styles.gridSection}`}>
                    <div className={styles.text}>
                        <h3>Frequently Asked <button><img src={questionMark} alt="more info" /></button></h3>
                        <p>Quick answers to the most common questions</p>
                    </div>
                    <div className={styles.faqContent}>
                        {faqs.map((faq, index) => (
                            <details key={index} className={styles.faqItem}>
                                <summary className={styles.faqQuestion}>{faq.question}</summary>
                                <p className={styles.faqAnswer}>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

                <div className={`${styles.contactSection} ${styles.gridSection}`}>
                    <div className={styles.text}>
                        <h3>Submit a Ticket</h3>
                        <p>Can't find the answer? Our team is here to help.</p>
                    </div>
                    <div className={styles.contactForm}>
                        <div className={styles.inputBlock}><img src={emailIcon} alt="email" /><input type="email" placeholder='Your Email Address' /></div>
                        <div className={styles.inputBlock}><img src={subjectIcon} alt="subject" /><input type="text" placeholder='Subject of your issue' /></div>
                        <div className={styles.contactForm__input}>
                            <textarea className={styles.textArea} 
                                name="ticket description"
                                placeholder="Please describe your issue in detail..."/>
                        </div>
                        <div className={styles.formActions}>
                           <button className={styles.submitButton}>Send Ticket <img src={sendIcon} alt="send" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpAndSupport;
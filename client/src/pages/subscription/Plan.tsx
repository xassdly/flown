import styles from './Plan.module.css';

type PlanProps = {
    emoji: string;
    title: string;
    benefits: string[];
    buttonText: string;
}

const Plan = ( { emoji, title, benefits, buttonText }: PlanProps ) => {
    return (
        <div className={styles.item}>
            <header className={styles.header}>{emoji} {title}</header>
            <div className={styles.benefits}>
                <h3>Benefits</h3>
                <ul title='Benefits'>
                    {benefits.map((text, i) => <li key={i}>{text}</li>)}
                </ul>
            </div>
            <button className={`${styles.button} ${buttonText === "Current Plan" ? styles.current : ''}`}>
                {buttonText}
            </button>
            <div className={styles.figure}></div>
        </div>
    )
};

export default Plan;
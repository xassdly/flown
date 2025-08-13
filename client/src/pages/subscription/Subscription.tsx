import styles from './Subscription.module.css';
import Plan from './Plan';
import { useUser } from '../../contexts/UserContext/UserContext';
import { plans } from '../../mock/plans';
import type { SwipeableHandlers } from 'react-swipeable';

type SubscriptionProps = {
    handlers: SwipeableHandlers;
}

const Subscription = ( { handlers }: SubscriptionProps) => {
    const { user } = useUser();

    return (
        <div {...handlers} className={styles.subscription}>
            <div className={styles.container}>
                <div className={styles.title}>
                    Subscription
                </div>
                <div className={styles.user}>
                    <img src={user?.avatar} alt="avatar" />
                    <div className={styles.userInfo}>
                        <div>
                            <p className={styles.username}>{user?.username}</p><div className={styles.status}>{user?.plan && user.plan.charAt(0).toUpperCase() + user.plan.slice(1)}</div>
                        </div>
                        <p className={styles.email}>{user?.email}</p>
                    </div>
                </div>
                <div className={styles.plans}>
                    {plans.map((plan) => (
                        <Plan key={plan.id} 
                            emoji={plan.emoji}
                            title={plan.title}
                            benefits={plan.benefits}
                            buttonText={plan.buttonText} />
                    ))}
                </div>
                <div className={styles.secure}>
                    <h3>🔒 Secure Payments</h3>
                    <p>
                        All transactions are securely encrypted using industry-standard protocols and 
                        processed through trusted, certified payment gateways to ensure your personal 
                        and financial data remains safe at every step.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Subscription;
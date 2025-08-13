import type { UserModel } from '../../models/UserModel';
import styles from './FriendComponent.module.css';
import arrowRight from './../../assets/main_icons/arrowRight.svg';
import { countries } from '../../mock/flags';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FriendComponentProps = {
    user: UserModel;
    onRemove: (id: number) => void;
}

const FriendComponent = ( {user, onRemove }: FriendComponentProps) => {
    const flagSrc = `${import.meta.env.BASE_URL}${countries[user.country.toLowerCase()]}`;

    const [isHideClicked, setIsHideClicked] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    const navigate = useNavigate();

    const handleButtonHide = () => {
        setIsHideClicked(true);
        setTimeout(() => {
            setIsHidden(true);
            setTimeout(() => {
                setIsRemoved(true);
                onRemove(user.id);
            }, 300);
        }, 300);
    }

    const handleButtonViewProfile = () => {
        navigate(`/profile/${user.id}`);
    }

    return !isRemoved && (
        <div className={`${styles.item} 
                        ${isHideClicked ? styles.added : ''} 
                        ${isHidden ? styles.hidden : ''}`}>
            <div className={styles.user}>
                <img src={user.avatar} alt="user avatar" />
                <div className={styles.userInfo}>
                    <div className={styles.username}>{user.username} <img className={styles.flags} src={flagSrc} alt="country flag icon" /></div>
                    <p className={styles.email}>{user.email}</p>
                </div>
            </div>
            <div className={styles.actions}>
                <button className={styles.buttonHide} onClick={handleButtonHide}>Hide</button>
                <button className={styles.buttonView} onClick={handleButtonViewProfile}>View Profile <img src={arrowRight} alt="view profile icon" /></button>
            </div>
        </div>
    )
};

export default FriendComponent;
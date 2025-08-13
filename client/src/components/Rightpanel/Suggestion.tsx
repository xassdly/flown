import styles from './styles/Suggestion.module.css';

import plusicon from './../../assets/rightside_icons/plusicon.svg';
import type { UserModel } from '../../models/UserModel';
import { useState } from 'react';

type SuggestionProps = {
    user: UserModel;
}

const Suggestion = ( {user} : SuggestionProps) => {
    const [isFriendAdded, setIsFriendAdded] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [removeElement, setRemoveElement] = useState(false);

    const handleAddFriend = () => {
        setIsFriendAdded(true);
        setTimeout(() => {
            setIsHidden(true);
            setTimeout(() => setRemoveElement(true), 300);
        } , 300);
    }

    return !removeElement && (
        <div className={`${styles.suggestion} 
                        ${isFriendAdded ? styles.added : ''} 
                        ${isHidden ? styles.hidden : ''}`}>
            <div className={styles.user}>
                <img src={user.avatar} alt="user" />
                <div className={styles.userInfo}>
                    <h3>{user.username}</h3>
                    <p>@{user.username.toLowerCase()}</p>
                </div>
            </div>
            <button className={styles.addUser} onClick={handleAddFriend} >
                <img src={plusicon} alt="add"/>
            </button>
        </div>
    )
}

export default Suggestion;
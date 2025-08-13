import styles from './Friends.module.css';
import searchIcon from './../../assets/main_icons/searchicon.svg';
import { usersMock } from '../../mock/users';
import FriendComponent from './FriendComponent';
import { useState } from 'react';
import type { UserModel } from '../../models/UserModel';
import type { SwipeableHandlers } from 'react-swipeable';

type FriedsProps = {
    handlers: SwipeableHandlers;
}

const Friends = ( { handlers }:FriedsProps ) => {
    const [friends, setFriends] = useState<UserModel[]>(usersMock);
    const [text, setText] = useState('');

    const removeFriend = (id: number) => {
        setFriends(prev => prev.filter(friend => friend.id !== id));
    };

    const filteredFriends = friends.filter(friend =>
        friend.username.toLowerCase().startsWith(text.toLowerCase())
    );

    return (
        <div {...handlers} className={styles.friends}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h3 className={styles.title}>Friends</h3>
                    <div className={styles.search}>
                        <img src={searchIcon} alt="search icon" />
                        <input
                            type="text"
                            placeholder="Search people..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                </header>
                <div className={styles.main}>
                    {filteredFriends.length === 0 ? (
                        <p className={styles.empty}>No people found :(</p>
                    ) : (
                        filteredFriends.map(friend => (
                            <FriendComponent key={friend.id} user={friend} onRemove={removeFriend} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Friends;

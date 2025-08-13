import styles from './styles/Rightpanel.module.css';

import avatar_indicator from './../../assets/rightside_icons/avatar_indicator.svg';
import messicon from './../../assets/rightside_icons/mess.svg';
import notsdarkicon from './../../assets/rightside_icons/nots.svg'
import seeallicon from './../../assets/rightside_icons/seeall.svg';
import setticon from './../../assets/rightside_icons/sett.svg';
import trendicon from './../../assets/rightside_icons/TrendUp.svg';
import moreicon from './../../assets/main_icons/more.svg';
import Suggestion from './Suggestion';
import Event from './Event';

import moonicon from './../../assets/rightside_icons/moonicon.svg';
import gifticon from './../../assets/rightside_icons/gifticon.svg';
import gradicon from './../../assets/rightside_icons/gradicon.svg';
import groupicon from './../../assets/rightside_icons/groupicon.svg';

import { usersMock } from '../../mock/users';
import { EventModel } from '../../models/EventModel';
import { useUser } from '../../contexts/UserContext/UserContext';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const events:EventModel[] = [];
events.push(new EventModel(1, "Friend's birthday", new Date(2026, 6, 17), gifticon));
events.push(new EventModel(2, "Graduation", new Date(2028, 4, 21), gradicon));
events.push(new EventModel(3, "Group Meetup", new Date(2025, 11, 1), groupicon));
events.push(new EventModel(4, "Holiday", new Date(2029, 9, 7), moonicon));

type RightpanelProps = {
    isOpen: boolean;
    onClose: () => void;
}

const Rightpanel = ( { isOpen, onClose }: RightpanelProps) => {
    const [isUserActive] = useState(true);
    const navigate = useNavigate();
    const {user} = useUser();

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);
    

    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={onClose}></div>
            )}
        
            <div className={`rightpanel ${isOpen ? 'active' : ''}`}>

                <header className={styles.header}>
                    <div className={styles.userAvatarWrapper} onClick={() => navigate(`/profile/${user?.id}`)}>
                        <img className={styles.userAvatar} src={user?.avatar} alt="avatar" />
                        {isUserActive && (
                            <img className={styles.avatarIndicator} src={avatar_indicator} alt="indicator" />
                        )}
                    </div>
                    <div className={styles.headerActions}>
                        <button className={styles.headerButton} ><img src={messicon} alt="messages" /></button>
                        <button className={styles.headerButton} ><img src={notsdarkicon} alt="notifications" /></button>
                        <button className={styles.headerButton} onClick={() => navigate('/settings')}><img src={setticon} alt="settings" /></button>
                    </div>
                </header>

                <div className={styles.friends}>
                    <header className={styles.friends__header}>
                        <div className={styles.friendsTitle}>Friends Suggestions</div>
                        <button className={styles.friendsButton} onClick={() => navigate('/friends')}>
                            <p>See All</p>
                            <img src={seeallicon} alt="seeall" />
                        </button>
                    </header>
                    <div>
                        <Suggestion user={usersMock[3]}/>
                        <Suggestion user={usersMock[5]}/>
                        <Suggestion user={usersMock[6]}/>
                        <Suggestion user={usersMock[8]}/>
                        <Suggestion user={usersMock[1]}/>
                    </div>
                </div>

                <div className={styles.activity}>
                    <header className={styles.activity__header}>
                        <div>Profile Activity</div>
                        <button className={styles.button}><img src={moreicon} alt="more" /></button>
                    </header>
                    <div className={styles.activity__content}>
                        <div className={styles.activity__users}>
                            <img src={usersMock[7].avatar} alt="user" />
                            <img src={usersMock[4].avatar} alt="user" />
                            <img src={usersMock[8].avatar} alt="user" />
                            <img src={usersMock[1].avatar} alt="user" />
                            <img src={usersMock[4].avatar} alt="user" />
                            <img src={usersMock[8].avatar} alt="user" />
                            <img src={usersMock[2].avatar} alt="user" />
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.followersCount}><h3>+1,158</h3><p>Followers</p></div>
                            <div className={styles.followersPercentage}><img src={trendicon} alt="trend" /><h3>23%</h3><p>vs last month</p></div>
                        </div>
                        <div className={styles.activityMessage}>
                            You gained a substantial amount of followers this month!
                        </div>
                    </div>
                </div>

                <div className={styles.events}>
                    <header className={styles.events__header}>
                        <div>Upcoming Events</div>
                        <button className={styles.button}><img src={moreicon} alt="more" /></button>
                    </header>
                    <div>
                        {events.map((event) => (
                            <Event key={event.id} event={event} />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Rightpanel;
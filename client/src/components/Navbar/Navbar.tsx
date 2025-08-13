import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';

import logo from './../../assets/logo.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import feedicon from './../../assets/leftside_icons/feed.svg';
import friendsicon from './../../assets/leftside_icons/friends.svg';
import subicon from './../../assets/leftside_icons/sub.svg';
import settingsicon from './../../assets/leftside_icons/settings.svg';
import helpicon from './../../assets/leftside_icons/help.svg';
import limiticon from './../../assets/leftside_icons/limit.svg';
import leaveicon from './../../assets/leftside_icons/leave.svg';
import closeicon from './../../assets/leftside_icons/close.svg';

import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext/UserContext';
import Modal from '../Modal/Modal';
import { useSwipeable } from 'react-swipeable';
 
type NavbarProps = {
    isOpen: boolean;
    onClose: () => void;
    handleLogout: () => void;
}

const Navbar = ( { isOpen, onClose, handleLogout }: NavbarProps) => {
    const [isProOpen, setIsProOpen] = useState(true);
    const navigate = useNavigate();

    const { user } = useUser();

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


    const [isLogoutOpen, setIsLogoutOpen] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
        onClose();
        },
        trackMouse: window.innerWidth < 1000
    });

    return (
        <>
            {isOpen && (
                <div className="overlay" onClick={onClose}></div>
            )}
            
            <div {...handlers} className={`navbar ${isOpen ? 'active' : ''}`}>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.search}>
                    <img src={searchicon} alt="search" /><input type="text" placeholder="Search..."/>
                </div>
                <nav className={styles.nav}>
                    <button className={styles.navItem} onClick={() => navigate('/')}>
                        <img src={feedicon} alt="Home" />
                        <p>Home</p>
                    </button>
                    <button className={styles.navItem} onClick={() => navigate('/friends')}>
                        <img src={friendsicon} alt="Friends" />
                        <p>Friends</p>
                    </button>
                    <button className={styles.navItem} onClick={() => navigate('/subscription')}>
                        <img src={subicon} alt="Subscription" />
                        <p>Subscription</p>
                    </button>
                    <button className={styles.navItem} onClick={() => navigate('/settings')}>
                        <img src={settingsicon} alt="Settings" />
                        <p>Settings</p>
                    </button>
                    <button className={styles.navItem} onClick={() => navigate('/support')}>
                        <img src={helpicon} alt="Help & Support" />
                        <p>Help & Support</p>
                    </button>
                </nav>

                {isProOpen && (
                    <div className={styles.proOffer}>
                        <button onClick={() => setIsProOpen(false)} className={styles.closeProOffer}><img src={closeicon} alt="close" /></button>
                        <img src={limiticon} alt="limit" />
                        <p>Enjoy unlimited access to our app with only a small price monthly.</p>
                        <div className={styles.actions}>
                            <button onClick={() => setIsProOpen(false)}>Dismiss</button>
                            <button>Go Pro</button>
                        </div>
                    </div>
                )}
                
                <div className={styles.user}>
                    <div className={styles.userInfo}>
                        <img src={user?.avatar} alt="user" />
                        <div className={styles.username}>
                            <h3>{user?.username}</h3>
                            <p>@{user?.username.toLowerCase()}</p>
                        </div>
                    </div>
                    <div className={styles.logout} onClick={() => setIsLogoutOpen(true)}>
                        <img src={leaveicon} alt="logout" />
                    </div>

                </div>
                {isLogoutOpen && (
                    <Modal onClose={() => setIsLogoutOpen(false)} isOpen={isLogoutOpen}>
                        <div className={styles.logoutModal} onClick={e => e.stopPropagation()}>
                            <h3>You sure to logout?</h3>
                            <button onClick={handleLogout}>Yes</button>
                            <button onClick={() => setIsLogoutOpen(false)}>No</button>
                        </div>
                    </Modal>
                )}
            </div>
        </>
        
    )
}

export default Navbar;
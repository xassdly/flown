import styles from './Reset.module.css';
import logo from './../../../assets/logo.svg';
import password_icon_white from './../../../assets/auth_icons/password_icon_white.svg';
import mail_icon from './../../../assets/auth_icons/mail_icon.svg';
import back_icon from './../../../assets/auth_icons/back_icon.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    const navigate = useNavigate();
    const [resetEmailText, setResetEmailText] = useState('');
    const [showResetSuccess, setShowResetSuccess] = useState(false);

    const [isResetError, setIsResetError] = useState(false);

    const handleResetButton = () => {
        const resetEmailIsEmpty = resetEmailText.trim() ==='';
        const resetEmailIsInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resetEmailText);

        if (resetEmailIsEmpty || resetEmailIsInvalid) {
            setIsResetError(true);
            setTimeout(() => setIsResetError(false), 1000);
            return;
        } else {
            setShowResetSuccess(true);
            setTimeout(() => setShowResetSuccess(false), 3000);
        }
    }


    return (
        <div className="auth">
            <div className="auth__container">
                
                <div className="auth__logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="auth__title reset">
                    <h3>Reset Your Password</h3>
                    <p>Forgot your password? No worries, then let’s submit password reset. It will be sent to your email.</p>
                </div>

                <div className="auth__formGroup">
                    <label htmlFor="mail">Email Adress</label>
                    <div className={`auth__formWrapper ${isResetError ? 'error' : ''}`}>
                        <img src={mail_icon} alt="mail" />
                        <input id='mail' type="email" placeholder='elementary221b@gmail.com' value={resetEmailText} onChange={(e) => setResetEmailText(e.target.value)}/>
                   </div>
                </div>

                <div className="auth__main__button reset" onClick={handleResetButton}>
                    <p>Reset Password</p><img src={password_icon_white} alt="sign in" />
                </div>

                {showResetSuccess && (
                    <div className="toast green">
                        Password reset link has been sent to your email.
                    </div>
                )}

                <button className={styles.backButton} onClick={() => navigate('/signin')}>
                    <img src={back_icon} alt="back" />
                    <p>Back to login screen</p>
                </button>

            </div>
            <footer className="auth__footer">
                <div className="auth__footer__title">
                    Copyright 2025 slothUI ©
                </div>
                <div className="auth__footer__links">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </footer>
        </div>
    )
}

export default Reset;
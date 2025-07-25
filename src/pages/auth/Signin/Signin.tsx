import './signin.css';
import { useState } from 'react';

import logo from './../../../assets/logo.svg';
import facebook_icon from './../../../assets/auth_icons/facebooklogo.svg';
import twitter_icon from './../../../assets/auth_icons/twitterlogo.svg';
import mail_icon from './../../../assets/auth_icons/mail_icon.svg';
import password_icon from './../../../assets/auth_icons/password_icon.svg';
import showpassword from './../../../assets/auth_icons/showpass0.svg';
import dontshowpassword from './../../../assets/auth_icons/showpass1.png';
import signin_icon from './../../../assets/auth_icons/signin.svg';
import { useNavigate } from 'react-router-dom';

type SigninProps = {
    setIsLoggedIn: (value: boolean) => void;
}

const Signin = ( {setIsLoggedIn}: SigninProps) => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    const [isError, setIsError] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [errorText, setErrorText] = useState('');

    const showError = (msg: string) => {
        setIsError(true);
        setErrorText(msg);
        setShowErrorMessage(true);

        setTimeout(() => setIsError(false), 1000);
        setTimeout(() => setShowErrorMessage(false), 3000);
    }
    
    const handleSigninButton = () => {
        const emailIsEmpty = emailText.trim() === '';
        const passwordIsEmpty = passwordText.trim() === '';
        const passwordTooShort = passwordText.length < 8;
        const emailIsInvalid = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailText);

        if (emailIsEmpty || emailIsInvalid) {
            showError('Invalid email');
            setEmailText('');
            return;

        } else if (passwordIsEmpty || passwordTooShort) { 
            showError('Invalid password');
            setPasswordText('');
            return

        } else {
            setIsLoggedIn(true);
            navigate('/');
        }
    }

    return (
        <div className="auth">

            {showErrorMessage && (
                <div className="toast">
                    {errorText}
                </div>
            )}

            <div className="auth__container">

                <div className="signin__logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="auth__title">
                    <h3>Sign In To Your Account.</h3>
                    <p>Unleash your inner sloth 4.0 right now.</p>
                </div>

                <div className="signin__input__field">
                    <label htmlFor="mail">Email Adress</label>
                    <div className={`signin__input__field__wrapper ${isError ? 'error' : ''}`}>
                        <img src={mail_icon} alt="mail" />
                        <input id='mail' type="email" placeholder='elementary221b@gmail.com' value={emailText} onChange={(e) => setEmailText(e.target.value)}/>
                    </div>
                </div>

                <div className="signin__input__field">
                    <label htmlFor="password">Password</label>
                    <div className={`signin__input__field__wrapper ${isError ? 'error' : ''}`}>
                        <img src={password_icon} alt="password" />
                        <input id='password' type={showPassword ? "text" : "password"} placeholder='*****************' value={passwordText} onChange={(e) => setPasswordText(e.target.value)}/>
                        
                        <img className='signin__input__field__showhidepassword' 
                            src={showPassword ? dontshowpassword : showpassword} alt="show/hide password" 
                            onClick={() => setShowPassword(prev => !prev)}/>
                    </div>
                </div>

                <div className="signin__utils">
                    <label className="signin__remember">
                        <input type="checkbox" />
                        <span className='checkmark'></span>
                        Remember For 30 Days
                    </label>
                    <div className="signin__forgot" onClick={() => navigate('/reset')} >
                        <p>Forgot Password</p>
                    </div>
                </div>

                <button className="auth__main__button" onClick={handleSigninButton}>
                    <p>Sign In</p><img src={signin_icon} alt="sign in" />
                </button>

                <div className="signin__button__signup">
                    <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span></p>
                </div>

                <div className="signin__or">
                    <span>OR</span>
                </div>

                <button className="signin__button__facetwitgoog">
                    <img src={facebook_icon} alt="facebook" />
                    Sign In With Facebook
                </button>

                <button className="signin__button__facetwitgoog">
                    <img src={twitter_icon} alt="twitter" />
                    Sign In With Twitter
                </button>

            </div>
            <div className="auth__footer">
                <div className="signin__footer__title">
                    Copyright 2025 slothUI ©
                </div>
                <div className="signin__footer__links">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Signin;
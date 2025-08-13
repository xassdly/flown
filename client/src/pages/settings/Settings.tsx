import styles from './Settings.module.css';
import phoneIcon from './../../assets/main_icons/phone.svg';
import questionMark from './../../assets/main_icons/question.svg';
import cloudIcon from './../../assets/main_icons/cloud.svg';
import inpuIcon from './../../assets/auth_icons/name_icon.svg';
import saveIcon from './../../assets/addnewpost_icons/publish.svg';
import cancelIcon from './../../assets/addnewpost_icons/cancel.svg';

import UploadFile from '../../components/UploadFile/UploadFile';
import { useState } from 'react';
import type { SwipeableHandlers } from 'react-swipeable';

type SettingsProps = {
    handlers: SwipeableHandlers;
}

const Settings = ( {handlers}: SettingsProps ) => {
    const [, setFile ] = useState<string>();
    const [descriptionText, setDescriptonText] = useState('');
    const descMaxLength = 250;
    return (
        <div {...handlers} className={styles.settings}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__content}>
                        <h3>Profile Settings</h3>
                        <div className={styles.headerActions}>
                            <button><img src={phoneIcon} alt="numbers button" /></button>
                            <button><img src={questionMark} alt="questions?" /></button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.profileDetails}>
                    <div className={styles.profileDetails__text}>
                        <h3>Profile Details</h3>
                        <p>You can change your profile details here seamlessly</p>
                    </div>
                    <div className={styles.profileDetails__actions}>
                        <button className={styles.exportButton}><img src={cloudIcon} alt="export button icon" />Export Data</button>
                        <button className={styles.saveButton}>Save</button>
                    </div>
                </div>

                <div className={`${styles.publicProfile} ${styles.gridSection}`}>
                    <div className={styles.text}>
                        <h3>Public Profile <button><img src={questionMark} alt="more info" /></button></h3>
                        <p>This is the main profile that will be visible for everyone</p>
                        <button>View Details</button>
                    </div>
                    <div className={styles.publicProfile__inputs}>
                        <div className={styles.inputBlock}><img src={inpuIcon} alt="link" /><input type="text" placeholder='flown Official' /></div>
                        <div className={styles.inputBlock}><p>https://flown.com/</p><input type="text" placeholder='X_AE_A-22'/></div>
                    </div>
                </div>

                <div className={`${styles.bioDescription} ${styles.gridSection}`}>
                    <div className={styles.text}>
                        <h3>Bio Description</h3>
                        <p>This will be your main story. Keep it very,very long</p>
                    </div>
                    <div className={styles.bioDescription__input}>
                        <textarea className={styles.textArea} 
                            value={descriptionText} 
                            onChange={(e) => setDescriptonText(e.target.value)} 
                            name="bio description"
                            maxLength={descMaxLength}
                            placeholder="Share your interests, hobbies, or anything you'd like others to know"/>
                        <p>{descriptionText.length} / {descMaxLength}</p>
                    </div>
                </div>

                <div className={`${styles.profilePicture} ${styles.gridSection}`}>
                    <div className={styles.text}>
                        <h3>Profile Picture</h3>
                        <p>This is where people will see your actual face</p>
                        <button>View Details</button>
                    </div>
                    <div className={styles.profilePicture__input}>
                        <UploadFile setFile={setFile}/>
                    </div>
                </div>

                <div className={`${styles.notifications} ${styles.gridSection}`}>
                    <div className={styles.text}>
                        <h3>Notifications</h3>
                        <p>This is where you'll receive notifications</p>
                    </div>
                    <div className={styles.notifications__inputs}>
                        <label className={styles.notification}>
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                            Reports
                        </label>
                        <label className={styles.notification}>
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                            Sound
                        </label>
                        <label className={styles.notification}>
                            <input type="checkbox" />
                            <span className={styles.checkmark}></span>
                            Vibrations
                        </label>
                    </div>
                </div>

                <div className={`${styles.socialMediaLinks} ${styles.gridSection}`}>
                    <div className={styles.text}>
                        <h3>Social Media Links <button><img src={questionMark} alt="more info" /></button></h3>
                        <p>Links for your social media</p>
                    </div>
                    <div className={styles.socialMediaLinks__inputs}>
                        <div className={styles.inputBlock}><p>facebook.com/</p><input type="text" placeholder='X_AE_A-22'/></div>
                        <div className={styles.inputBlock}><p>twitter.com/</p><input type="text" placeholder='X_AE_A-22'/></div>
                        <div className={styles.inputBlock}><p>discord.com/</p><input type="text" placeholder='X_AE_A-22'/></div>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button className={styles.exportButton}>Cancel <img src={cancelIcon} alt="cancel" /></button>
                    <button className={styles.saveButton}>Save Settings <img src={saveIcon} alt="save" /></button>
                </div>
            </div>
        </div>
    )
}

export default Settings;
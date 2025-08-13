import styles from './AddNewPost.module.css';

import cancel_icon from './../../assets/addnewpost_icons/cancel.svg';
import publish_icon from './../../assets/addnewpost_icons/publish.svg';

import { useUser } from '../../contexts/UserContext/UserContext';
import { useState } from 'react';
import { PostModel } from '../../models/PostModel';
import { posts_array } from '../../mock/posts';
import UploadFile from '../UploadFile/UploadFile';

type AddNewPostProps = {
    onClose: () => void;
}

const AddNewPost = ( {onClose}: AddNewPostProps ) => {
    const stopProp: React.MouseEventHandler<HTMLDivElement> = (e) => e.stopPropagation();
    const {user} = useUser();

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('Public');
    const options: string[] = ['Public', 'Private', 'Only Friends'];

    const [textLocation, setTextLocation] = useState('');
    const [textDesctiprion, setTextDescription] = useState('');
    const [file, setFile] = useState<string>();

    const handlePublishButton = () => {
        if (textLocation.trim() === '' || textDesctiprion.trim() === '' || !user) {
            return;
        } else {
            posts_array.unshift( new PostModel(posts_array.length + 1, user, textLocation, textDesctiprion, file ?? null, 0 , [], 0));
            onClose();
        }
    }

    return (
        <div className={styles.modal} onClick={stopProp}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <header className={styles.header}>
                        <div className={styles.userInfo}>
                            <img src={user?.avatar} alt="user avatar" />
                            <div className={styles.username}>
                                <p>{user?.username}</p>
                                <p>@{user?.username.toLowerCase()}</p>
                            </div>
                        </div>
                        <button onClick={onClose} className={styles.closeButton}><img src={cancel_icon} alt="close window" /></button>
                    </header>

                    <div className={styles.main}>
                            <div className={styles.formGroup}>
                                <label htmlFor='description'>Location</label>
                                <div>
                                    <input 
                                        id='description' type="text" 
                                        placeholder="King’s Landing..." value={textLocation} 
                                        onChange={(e) => setTextLocation(e.target.value)} />
                                </div>
                            </div>

                            <UploadFile setFile={setFile}/>

                            <div className={styles.formGroup}>
                                <label htmlFor='addpost__description'>Description</label>
                                <div>
                                    <textarea 
                                        id='addpost__description' 
                                        placeholder='From the walls of King’s Landing, I watched the sea swallow the last light of day...'
                                        value={textDesctiprion} onChange={(e) => setTextDescription(e.target.value)}/>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor='addpost_visibility'>Visibility</label>
                                <div className={styles.dropdown}>
                                    <div className={styles.dropdownHeader} onClick={() => setOpen(prev => !prev)}>
                                        {selected} <span className={styles.arrow}>{open ? "▼" : "▲"}</span>
                                    </div>
                                        <ul className={`${styles.dropdownList} ${open ? styles.show : ''}`}>
                                            {options.map((option) => (
                                                <li key={option} onClick={() => {setSelected(option); setOpen(false); }}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <button onClick={onClose} className={`${styles.button} ${styles.cancel}`}>
                                    <p>Cancel</p>
                                    <img src={cancel_icon} alt="cancel" />
                                </button>
                                <button onClick={handlePublishButton} className={`${styles.button} ${styles.publish}`}>
                                    <p>Publish</p>
                                    <img src={publish_icon} alt="publish post" />
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPost;
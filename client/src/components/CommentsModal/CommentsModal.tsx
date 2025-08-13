import styles from './CommentsModal.module.css';

import sendnb from './../../assets/main_icons/send_notblue.svg';
import close from './../../assets/addnewpost_icons/cancel.svg';
import smile from './../../assets/main_icons/smile.svg';

import EmojiPicker from '../EmojiPicker/EmojiPicker';
import Comment from '../Comment/Comment';
import { CommentModel } from '../../models/CommentModel';
import { useUser } from '../../contexts/UserContext/UserContext';
import { useState, useRef } from 'react';

type CommentsWindowProps = {
    comments: CommentModel[];
    onClose: () => void;
    onAddComment: (newComment: CommentModel) => void;
}

const CommentsWindow = ( { comments, onClose, onAddComment }: CommentsWindowProps) => {
    const { user }= useUser();

    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
    const postFooterEmojiButtonRef = useRef<HTMLButtonElement>(null);

    const [text, setText] = useState('');

    const handleCommentSend = () => {
        if (text.trim() === '' || !user) return;

        const newComment = new CommentModel(comments.length + 1, user, text, new Date(), 0);
        
        onAddComment(newComment);
        setText('');
        setIsEmojiPickerOpen(false);
    }

    const handleLocalEmojiSelect = (emoji: string) => {
        setText((prev) => prev + emoji);
    }

 
    return (
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <header className={styles.header}>
                <h3>Comments</h3>
                <button onClick={onClose} className={styles.closeButton}><img src={close} alt="close" /></button>
            </header>

            <div className={styles.comments}>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>

            <footer className={styles.footer}>
                <img className={styles.footerAvatar} src={user?.avatar} alt="user" />
                <div className={styles.footerForm}>
                    <input name='any' type="text" placeholder='Write your comment..' value={text} onChange={(e) => setText(e.target.value)} />
                    <div className={styles.emojiButtonWrapper}>
                        <button ref={postFooterEmojiButtonRef} onClick={() => setIsEmojiPickerOpen(prev => !prev)}><img src={smile} alt="emoji" /></button>
                        {isEmojiPickerOpen && (
                            <EmojiPicker onEmojiSelect={handleLocalEmojiSelect} onClose={() => setIsEmojiPickerOpen(false)} buttonRef={postFooterEmojiButtonRef} />
                        )}
                    </div>
                </div>
                <button className={styles.buttonSend} onClick={handleCommentSend}>
                    <img src={sendnb} alt="send" />
                </button>
            </footer>

        </div>
    )
}

export default CommentsWindow;
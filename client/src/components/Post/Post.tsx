import styles from './Post.module.css';
import { PostModel } from '../../models/PostModel';
import { useRef, useState } from 'react';
import parseHashtags from '../../utils/Hashtags/parseHashtags';


import CommentsWindow from '../CommentsModal/CommentsModal';
import EmojiPicker from '../EmojiPicker/EmojiPicker';
import Modal from '../Modal/Modal';

import more from './../../assets/main_icons/more.svg';
import like from './../../assets/main_icons/like.svg';
import liked from './../../assets/main_icons/liked.svg';
import comment from './../../assets/main_icons/comment.svg';
import share from './../../assets/main_icons/share.svg';
import share_active from './../../assets/main_icons/share_active.svg';
import save from './../../assets/main_icons/save.svg';
import saved from './../../assets/main_icons/saved.svg';

import smile from './../../assets/main_icons/smile.svg';
import send from './../../assets/main_icons/send.svg';


import { CommentModel } from '../../models/CommentModel';
import { useUser } from '../../contexts/UserContext/UserContext';


type PostProps = {
    post: PostModel;
}

const Post = ( {post}: PostProps ) => {
    const [isSaved, setIsSaved] = useState(false);
    const [isShared, setIsShared] = useState(false);
    const [shares, setShares] = useState(post.reposts);

    const {user} = useUser();

    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes);
    const [showHeart, setShowHeart] = useState(false);

    const [isCommWindowOpen, setIsCommWindowOpen] = useState(false);

    const [comments, setComments] = useState<CommentModel[]>(post.comments);
    const [postFooterText, setPostFooterText] = useState('');

    const [isPostFooterEmojiPickerOpen, setIsPostFooterEmojiPickerOpen] = useState(false);
    const emojiButtonRef = useRef<HTMLButtonElement | null>(null);


    const handleAddComment = (newComment: CommentModel) => {
        setComments((prevComments) => {
            const updatedComments = [...prevComments, newComment];
            return updatedComments;
        });
    }


    const handlePostFooterCommentSend = () => {
        if (postFooterText.trim() === '' || !user) return;

        const newComment = new CommentModel(comments.length + 1, user, postFooterText, new Date(), 0);
        setPostFooterText('');
        handleAddComment(newComment);
        setIsPostFooterEmojiPickerOpen(false);
    }


    const handlePostFooterEmojiSelect = (emoji: string) => {
        setPostFooterText((prev) => prev + emoji);
    }


    const handleSaveClick = () => {
        setIsSaved(prev => !prev);
    };


    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 1000);
        }
        setIsLiked(prev => !prev);
    };


    const handleShareClick = () => {
        if (isShared) {
            setShares(prev => prev - 1);
        } else {
            setShares(prev => prev + 1);
        }
        setIsShared(prev => !prev);
    };

    const parsedContent = parseHashtags(post.content);


    return (
        <div className={styles.post}>
            <div className="container">
                <div className={styles.main}>

                    <header className={styles.header}>
                        <div className={styles.user}>
                            <img src={post.user.avatar} alt="avatar" />
                            <div className={styles.userInfo}>
                                <h3>{post.user.username}</h3>
                                <p>{post.location}</p>
                            </div>
                        </div>
                        <button className={styles.postOptions}><img src={more} alt="more" /></button>
                    </header>

                    <div className={styles.content}>
                        <p className={styles.postText}>{parsedContent}</p>
                        <div className={styles.postImageWrapper}>
                            {post.image && <img onDoubleClick={handleLikeClick} className={styles.postImage} src={post.image} alt='img'/>}
                            {showHeart && post.image &&(
                                <img src={liked} alt="liked" className={styles.likeAnimation} />
                            )}
                        </div>
                        <div className={styles.postActions}>

                            <button onClick={handleLikeClick} className={styles.actionsButton}> 
                                <img src={isLiked ? liked : like} alt="like" />
                                <p>{likes}</p>
                            </button>

                            <button onClick={() => setIsCommWindowOpen(true)} className={styles.actionsButton}>
                                <img src={comment} alt="comment" />
                                <p>{comments.length}</p>
                            </button>

                            {isCommWindowOpen && (
                                <Modal onClose={() => setIsCommWindowOpen(false)} isOpen={isCommWindowOpen}>
                                    <CommentsWindow comments={comments} onClose={() => setIsCommWindowOpen(false)} onAddComment={handleAddComment}/>
                                </Modal>
                            )}

                            <button className={styles.actionsButton} onClick={handleShareClick}>
                                <img src={isShared ? share_active : share} alt="share" />
                                <p>{shares}</p>
                            </button>
                            
                            <button onClick={handleSaveClick} className={styles.actionsButton}>
                                <img src={isSaved ? saved : save} alt="save" />
                            </button>

                        </div>
                    </div>

                    <footer className={styles.footer}>
                        <div className={styles.form}>
                            <img src={user?.avatar} alt="avatar" />
                            <input type="text" placeholder='Write your comment..' value={postFooterText} onChange={(e) => setPostFooterText(e.target.value)}/>
                        </div>
                        <div className={styles.footerActions}>
                            <div className={styles.emojiButtonWrapper}>
                                <button  onClick={() => setIsPostFooterEmojiPickerOpen(prev => !prev)} ref={emojiButtonRef}><img src={smile} alt="smile" /></button>
                                {isPostFooterEmojiPickerOpen && (
                                    <EmojiPicker onEmojiSelect={handlePostFooterEmojiSelect} onClose={() => setIsPostFooterEmojiPickerOpen(false)} buttonRef={emojiButtonRef} />
                                )}
                            </div>
                            <button onClick={handlePostFooterCommentSend}><img src={send} alt="send" />
                                
                            </button>
                        </div>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default Post;
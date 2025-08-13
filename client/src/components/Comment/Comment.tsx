import styles from './Comment.module.css';

import { CommentModel } from "../../models/CommentModel";
import comm_like0 from './../../assets/main_icons/comm_like0.svg';
import comm_like1 from './../../assets/main_icons/comm_like1.svg';

import { useState } from "react";

type CommentProps = {
    comment: CommentModel 
}

const Comment = ( {comment}: CommentProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(comment.likes);

    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(prev => prev - 1)
        } else {
            setLikes(prev => prev + 1)
        }

        setIsLiked(prev => !prev);
    }

    return (
        <div className={styles.main}>

            <div className={styles.comment}>
                <div className={styles.userAvatar}>
                    <img src={comment.user.avatar} alt="user" />
                </div>
                <div className={styles.content}>
                    <div className={styles.topside}>
                        <h3>{comment.user.username}</h3>
                        <p>{comment.date.toLocaleDateString()}</p>
                    </div>
                    <p>{comment.content}</p>
                </div>
            </div>
            
            <button onClick={handleLikeClick} className={styles.like}>
                <img src={isLiked ? comm_like1 : comm_like0} alt="like" />
                <p>{likes}</p>
            </button>

        </div>
    )
}

export default Comment;
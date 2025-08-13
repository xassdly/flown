import styles from './Story.module.css';
import { StoryModel } from '../../models/StoryModel';

type StoryProps = {
    story: StoryModel;
    onClick: () => void;
    isViewed: boolean;
}

const Story = ({ story, onClick, isViewed }: StoryProps) => {
    return (
        <div className={styles.story} onClick={onClick}>
            <div className={styles.avatar}  
                style={ isViewed ? { background: "#B5B5B5"} : { background: "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)" }}>
                <img src={story.user.avatar} alt="a" draggable="false"/>
            </div>
            <div className={styles.username}>
                {story.user.username}
            </div>
        </div>
    )
}

export default Story;
import './storyViewer.css';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import { useState, useCallback, useEffect } from 'react';

import arrowleft from './../../assets/main_icons/arrowleft.svg';
import arrowright from './../../assets/main_icons/arrowright.svg';
import send from './../../assets/main_icons/send_story_comment.svg';
import close from './../../assets/main_icons/close.svg';

import { StoryModel } from '../../models/StoryModel';

type StoryViewerProps = {
    stories: StoryModel[];
    initialStoryIndex: number;
    onClose: () => void;
    setViewedStories: (viewedIndex: number) => void;
}

const StoryViewer = ({ stories, initialStoryIndex, onClose, setViewedStories }: StoryViewerProps) => {

    const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
    const [progress, setProgress] = useState(0);
    const [paused, setPaused] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        setCurrentStoryIndex(initialStoryIndex);
        setProgress(0);
        setElapsedTime(0);
        setPaused(false);
    }, [initialStoryIndex]);


    const goToNextStory = useCallback(() => {
        setElapsedTime(0);
        setProgress(0);

        const nextIndex = currentStoryIndex + 1;
        if (nextIndex < stories.length) {
            setCurrentStoryIndex(nextIndex);
        } else {
            onClose();
        }
    }, [currentStoryIndex, stories.length, onClose]);

    const goToPrevStory = useCallback(() => {
        const prevIndex = currentStoryIndex - 1;

        if (prevIndex >= 0) {
            setElapsedTime(0);
            setProgress(0);
            setCurrentStoryIndex(prevIndex);
        }
    }, [currentStoryIndex]);

    useEffect(() => {
        if (currentStoryIndex === null) return; 

        setViewedStories(currentStoryIndex);

        const start = Date.now() - elapsedTime;

        const interval = setInterval(() => {
            if (paused) return;

            const newElapsed = Date.now() - start;
            const percent = Math.min((newElapsed / 4000) * 100, 100);

            setProgress(percent);
            setElapsedTime(newElapsed);

            if (percent >= 100) {
                clearInterval(interval);
                setElapsedTime(0);
                goToNextStory();
            }
        }, 50);

        return () => clearInterval(interval);
    }, [currentStoryIndex, paused, elapsedTime, goToNextStory, setViewedStories]);

    if (currentStoryIndex === null || !stories) {
        return null;
    }

    const currentStory = stories[currentStoryIndex];

    return (
        <div className="story__modal__content" onClick={(e) => e.stopPropagation()}>
            <div 
                className="story__wrapper"
                onMouseDown={() => setPaused(true)}
                onMouseUp={() => setPaused(false)}
            >
                <img src={currentStory.content} alt="story content" className='story__image' draggable="false"/>
            </div>
            <div className="story__header">
                <div className='circle__avatar__wrapper'>
                    <img
                        className='story__header__avatar'
                        src={currentStory.user.avatar}
                        alt="avatar"
                        draggable="false"
                    />
                    <CircularProgressBar key={currentStoryIndex} size={51} strokeWidth={5} progress={progress} circleColor='#fff' trackColor='none'/> 
                    {currentStory.user.username}
                </div>
                <img className='story__header__close' src={close} alt="close" onClick={onClose} draggable="false"/>
            </div>

            <div className="story__footer">
                <div className="story__footer__input">
                    <input onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} 
                        onMouseDown={(e) => e.stopPropagation()} type="text" placeholder="Type your comment..." />
                </div>
                <div className="story__footer__button">
                    <button>
                        <img src={send} alt="send" draggable="false"/>
                    </button>
                </div>
            </div>

            {currentStoryIndex < stories.length - 1 && (
                <div className="scroll__btn right" onClick={(e) => {e.stopPropagation(); goToNextStory()}}>
                    <img src={arrowright} alt="next story" draggable="false"/>
                </div>
            )}

            {currentStoryIndex > 0 && (
                <div className="scroll__btn left" onClick={(e) => {e.stopPropagation(); goToPrevStory()}}>
                    <img src={arrowleft} alt="previous story" draggable="false"/>
                </div>
            )}

        </div>
    )
}

export default StoryViewer;
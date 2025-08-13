import styles from './Home.module.css';

import plussvg from './../../assets/main_icons/plus.svg';
import searchicon from './../../assets/main_icons/searchicon.svg';
import arrowleft from './../../assets/main_icons/arrowleft.svg';
import arrowright from './../../assets/main_icons/arrowright.svg';
import header_menu from './../../assets/main_icons/header_menu.svg';
import logomark from './../../assets/F.svg';

import Post from '../../components/Post/Post';
import Story from '../../components/Story/Story';
import { story_array } from '../../mock/stories';
import { posts_array } from '../../mock/posts';

import { useRef, useState, useEffect, useCallback } from 'react';
import Modal from '../../components/Modal/Modal';

import AddNewPost from '../../components/AddNewPost/AddNewPost';
import StoryViewer from '../../components/StoryViewer/StoryViewer';
import type { SwipeableHandlers } from 'react-swipeable';

type HomeProps = {
    openRightPanel: () => void;
    openLeftMenu: () => void;
    handlers: SwipeableHandlers;
};

const Home = ( { openRightPanel, openLeftMenu, handlers}: HomeProps) => {
    const storiesRef = useRef<HTMLDivElement>(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    const checkScrollPosition = () => {
        if (!storiesRef.current) return;
        const el = storiesRef.current;

        setShowLeft(el.scrollLeft > 0);
        setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }

    useEffect(() => {
        const el = storiesRef.current;
        if (!el) return;

        el.addEventListener('scroll', checkScrollPosition);

        checkScrollPosition();

        return () => el.removeEventListener('scroll', checkScrollPosition);
    }, []);

    const scrollStories = (offset: number) => {
        if (storiesRef.current) {
            storiesRef.current.scrollBy({
                left: offset,
                behavior: 'smooth'
            });
        }
    }

    const [addNewPostWindow, setAddNewPostWindow] = useState(false);
    const [showPostButtonText, setShowPostButtonText] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
        setShowPostButtonText(window.innerWidth < 1000);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewedStories, setViewedStories] = useState<number[]>([]);

    const handleSetViewedStories = useCallback((index: number) => {
        setViewedStories((prev) => [...new Set([...prev, index])]);
    }, []);

    const closeStoryViewer = useCallback(() => {
        setIsModalOpen(false);
        setActiveStoryIndex(null);
    }, []);

    useEffect(() => {
        const preloadStoryImages = () => {
            story_array.forEach((story) => {
                const img = new Image();
                img.src = story.content;
            });
        };
        preloadStoryImages();
    }, []);

    return (
        <div {...handlers} className={styles.home}>

            <header className={styles.header}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <button className={styles.logoButton} onClick={openLeftMenu}>
                            <img src={logomark} alt="menu"/>
                        </button>
                        <div className={styles.headerSearch}>
                            <input name="search" type="text" placeholder='Search for friends, groups, pages'/>
                            <img src={searchicon} alt='search'/>
                        </div>
                        <div className={styles.headerButton}>
                            <button onClick={() => setAddNewPostWindow(true)}>{showPostButtonText ? "" : "Add New Post"}<img src={plussvg} alt='+'/></button>
                        </div>

                        <div className={styles.menuButton} onClick={openRightPanel}>
                            <img src={header_menu} alt="menu" />
                        </div>

                        {addNewPostWindow && (
                            <Modal onClose={() => setAddNewPostWindow(false)} isOpen={addNewPostWindow}>
                                <AddNewPost onClose={() => setAddNewPostWindow(false)}/>
                            </Modal>
                        )}

                    </div>
                </div>
            </header>
            
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.storiesWrapper}>

                        {showLeft && (
                            <button className="scroll__btn left" onClick={() => scrollStories(-200)}><img src={arrowleft} alt="<"/></button>
                        )}
                        <div className={styles.stories} ref={storiesRef}>

                            {story_array.map((story, index) => (
                                <Story 
                                    key={story.id} 
                                    story={story} 
                                    isViewed={viewedStories.includes(index)}
                                    onClick={() => {
                                        setActiveStoryIndex(index);
                                        setIsModalOpen(true);
                                    }}
                                />
                            ))}
                            
                        </div>
                        {showRight && (
                            <button className="scroll__btn right" onClick={() => scrollStories(200)}><img src={arrowright} alt=">"/></button>
                        )}
                    </div>
                    
                    
                    <div className="home__posts">
                        {posts_array.map((post) => (
                            <Post key={post.id} post={post}/>
                        ))}
                    </div>


                    {isModalOpen && activeStoryIndex !== null && (
                        <Modal onClose={closeStoryViewer} isOpen={isModalOpen}>
                            <StoryViewer 
                                stories={story_array}
                                initialStoryIndex={activeStoryIndex}
                                onClose={closeStoryViewer}
                                setViewedStories={handleSetViewedStories}
                            />
                        </Modal>
                    )}

                    
                </div>
            </div>
        </div>
    )
}

export default Home;
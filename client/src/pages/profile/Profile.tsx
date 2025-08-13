import styles from './Profile.module.css';
import { countries } from '../../mock/flags';

import bookIcon from './../../assets/profile_icons/book.svg';
import moreIcon from './../../assets/profile_icons/more.svg';
import movieIcon from './../../assets/profile_icons/movie.svg';
import musicIcon from './../../assets/profile_icons/music.svg';
import quoteIcon from './../../assets/profile_icons/quote.svg';
import { useParams } from 'react-router-dom';
import { usersMock } from '../../mock/users';
import { useState } from 'react';
import { useUser } from '../../contexts/UserContext/UserContext';
import ProfilePost from './ProfilePost';
import { posts_array } from '../../mock/posts';
import Modal from '../../components/Modal/Modal';
import Post from '../../components/Post/Post';

const Profile = () => {
    const { id } = useParams();
    const { user: currentUser } = useUser();
    const userId = Number(id);
    const userPosts = posts_array.filter(post => post.user.id === Number(id));

    const isOwnProfile = currentUser?.id === userId;
    const user = isOwnProfile ? currentUser : usersMock.find(u => u.id === Number(id));
    

    if (!user) {
        return <div><h2>User not found</h2></div>
    }
    
    let flag = "";
    if (user) { 
        flag = `${import.meta.env.BASE_URL}${countries[user.country.toLowerCase()]}`;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postToOpen, setPostToOpen] = useState<Number | null>(null);
    const currentPost = posts_array.find(post => post.id === postToOpen);

    const handlePostClick = (postId: number) => {
        setPostToOpen(postId);
        setIsModalOpen(true);
    }

    return (
        <div className={styles.profile}>
            <header className={styles.header}>
                <h3>{user.username.toUpperCase()}</h3>
            </header>

            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.mainContent}>
                        <div className={styles.leftCol}>

                            <div className={`${styles.item} ${styles.user}`}>
                                <img className={styles.avatar} src={user.avatar} alt="user avatar" />
                                <p>{user.bio}</p>
                                <img className={styles.flag} src={flag} alt="user country flag" />
                            </div>

                            <div className={`${styles.item} ${styles.actions}`}>
                                <button className={styles.blueButton}>Follow</button>
                                <button className={styles.blueButton}>Add Friend</button>
                                <button className={styles.notBlueButton}>Chat</button>
                                <button className={styles.moreButton}><img src={moreIcon} alt="more button" /></button>
                            </div>

                            <div className={`${styles.item} ${styles.favorites}`}>
                                <h3 className={styles.title}>My Favorities</h3>
                                <div className={styles.favItem}>
                                    <div><img src={movieIcon} alt="movie" /><p>Movie</p></div>
                                    <p>{user.favorities.movie}</p>
                                </div>
                                <div className={styles.favItem}>
                                    <div><img src={bookIcon} alt="book" /><p>Book</p></div>
                                    <p>{user.favorities.book}</p>
                                </div>
                                <div className={styles.favItem}>
                                    <div><img src={musicIcon} alt="music" /><p>Music</p></div>
                                    <p>{user.favorities.music}</p>
                                </div>
                                <div className={styles.favItem}>
                                    <div><img src={quoteIcon} alt="quote" /><p>Quote</p></div>
                                    <p>{user.favorities.quote}</p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.rightCol}>

                            <div className={`${styles.item} ${styles.people}`}>
                                <h3 className={styles.title}>My People</h3>
                                <div className={styles.stats}>
                                    <div className={styles.stat}>
                                        <p>Followers</p>
                                        <div className={styles.statValue}>{user.followers}</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <p>Following</p>
                                        <div className={styles.statValue}>{user.following}</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <p>Friends</p>
                                        <div className={styles.statValue}>{user.friends}</div>
                                    </div>
                                    <div className={styles.stat}>
                                        <p>Family</p>
                                        <div className={styles.statValue}>{user.family}</div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.item} ${styles.skills}`}>
                                <h3 className={styles.title}>Skills</h3>
                                <div className={styles.skillList}>   
                                    <div className={styles.skillsContainer}>
                                    {user.skills.map((skill, index) => (
                                        <span key={index} className={styles.skill}>
                                        {skill}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={`${styles.item} ${styles.posts}`}>
                            <h3 className={styles.title}>{userPosts.length > 0 ? 'Posts' : 'Looks empty here :('}</h3>
                            <div className={styles.postCards}>
                                {userPosts.map((post) => (
                                    <ProfilePost key={post.id} 
                                        post={post} 
                                        onClick={() => handlePostClick(post.id)}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    {isModalOpen && currentPost &&(
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <div onClick={e => e.stopPropagation()}>
                                <Post post={currentPost} />
                            </div>
                        </Modal>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Profile;
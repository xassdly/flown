import styles from './styles/Event.module.css';

import notsicon from './../../assets/rightside_icons/notsicon.svg';
import notsicon_y from './../../assets/rightside_icons/nots_icon_y.svg';
import { EventModel } from '../../models/EventModel';
import { useState } from 'react';

type EventProps = {
    event: EventModel;
}

const Event = ({event}: EventProps) => {
    const [isEventNotificationActive, setIsEventNotificationActive] = useState(false);

    return (
        <div className={styles.event}>

            <div className={styles.content}>
                <div className={styles.icon}>
                    <img src={event.icon} alt="icon" />
                </div>
                <div className={styles.info}>
                    <h3>{event.title}</h3>
                    <p>{event.date.toDateString()}</p>
                </div>
            </div>
            <div className={styles.notification} onClick={() => setIsEventNotificationActive(prev => !prev)}>
                <img src={isEventNotificationActive ? notsicon_y : notsicon} alt="notification" />
            </div>

        </div>
    )
}

export default Event;
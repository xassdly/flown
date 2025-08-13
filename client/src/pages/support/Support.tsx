import './support.css';
import type { SwipeableHandlers } from 'react-swipeable';

type SupportProps = {
    handlers: SwipeableHandlers;
}

const Support = ( {handlers}: SupportProps) => {
    return (
        <div {...handlers} className="support">
            Support
        </div>
    )
}

export default Support;
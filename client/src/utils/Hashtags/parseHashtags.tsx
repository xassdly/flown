import './parseHashtags.css';

const parseHashtags = (text: string) => {
    const hashtagRegular = /(#\w+)/g;
    const parts = text.split(hashtagRegular);

    return parts.map((part, index) => {
        if (part.match(hashtagRegular)) {
            return (
                <span key={index} className="hashtag">
                    {part}
                </span>
            );
        };
        return part;
    });
};

export default parseHashtags;
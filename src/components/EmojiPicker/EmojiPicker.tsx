import React, { useRef, useEffect } from 'react';
import './emojiPicker.css';

type EmojiPickerProps = {
    onEmojiSelect: (emoji: string) => void;
    onClose: () => void;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
};

const EmojiPicker = ({ onEmojiSelect, onClose, buttonRef }: EmojiPickerProps) => {
    const pickerRef = useRef<HTMLDivElement>(null);

    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😜', '🤪', '😝', '🤑', '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏', '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯', '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '☹️', '😮', '😯', '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭', '😱', '😖', '😣', '😩', '😫', '😤', '😡', '😠', '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻', '👽', '👾', '🤖', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                pickerRef.current && !pickerRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose, buttonRef]);

    return (
        <div className="emoji__picker__popover" ref={pickerRef}>
            <div className="emoji__grid">
                {emojis.map((emoji, index) => (
                    <span key={index} onClick={() => onEmojiSelect(emoji)}>
                        {emoji}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default EmojiPicker;
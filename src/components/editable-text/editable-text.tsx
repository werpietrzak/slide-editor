import React, { KeyboardEvent, useState } from 'react';
import './editable-text.scss';

interface EditableTextProps {
    placeholderText: string;
    className?: string;
}

const CN = 'editable-text';

export const EditableText: React.FC<EditableTextProps> = ({
    placeholderText,
    className,
}) => {
    const [textContent, setTextContent] = useState(placeholderText);
    const [showInput, setShowInput] = useState(false);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            setShowInput(false);
        }
    };

    return (
        <div className={`${CN}__container`}>
            {showInput ? (
                <input
                    autoFocus
                    onBlur={() => setShowInput(false)}
                    onChange={event => setTextContent(event.target.value)}
                    onKeyDown={event => handleKeyDown(event)}
                />
            ) : (
                <span className={className} onClick={() => setShowInput(true)}>
                    {textContent}
                </span>
            )}
        </div>
    );
};

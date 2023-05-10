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
    const [textContent, setTextContent] = useState<string>(placeholderText);
    const [showInput, setShowInput] = useState<boolean>(false);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setShowInput(false);
        }
    };

    return (
        <div className={`${CN}__container`}>
            {showInput ? (
                <input
                    autoFocus
                    className={`${className} ${CN}__input`}
                    onBlur={() => setShowInput(false)}
                    onChange={event => setTextContent(event.target.value)}
                    onKeyDown={event => handleKeyDown(event)}
                    value={textContent === placeholderText ? '' : textContent}
                />
            ) : (
                <span className={className} onClick={() => setShowInput(true)}>
                    {textContent}
                </span>
            )}
        </div>
    );
};

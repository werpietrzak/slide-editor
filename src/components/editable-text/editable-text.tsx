import React, { KeyboardEvent, useState } from 'react';

interface EditableTextProps {
    placeholderText: string;
}

export const EditableText: React.FC<EditableTextProps> = ({
    placeholderText,
}) => {
    const [textContent, setTextContent] = useState(placeholderText);
    const [showInput, setShowInput] = useState(false);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            setShowInput(false);
        }
    };

    return (
        <div>
            {showInput ? (
                <input
                    autoFocus
                    onBlur={() => setShowInput(false)}
                    onChange={event => setTextContent(event.target.value)}
                    onKeyDown={event => handleKeyDown(event)}
                />
            ) : (
                <span onClick={() => setShowInput(true)}>{textContent}</span>
            )}
        </div>
    );
};

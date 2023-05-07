import React, { useState } from 'react';
import { EditableText } from '../editable-text';
import { IconSelector } from '../icon-selector';

interface IconSectionProps {
    placeholderIcon: string;
}

export const IconSection: React.FC<IconSectionProps> = ({
    placeholderIcon,
}) => {
    const [selectedIcon, setSelectedIcon] = useState(placeholderIcon);
    const [showIconSelect, setShowIconSelect] = useState(false);

    const handleSelectIcon = (icon: string): void => {
        setSelectedIcon(icon);
        setShowIconSelect(false);
    };

    return (
        <div>
            {showIconSelect && <IconSelector onIconSelect={handleSelectIcon} />}
            <div onClick={() => setShowIconSelect(true)}>
                <span className="material-icons">{selectedIcon}</span>
            </div>
            <EditableText placeholderText="Insert text here" />
            <EditableText placeholderText="Add here your additional text" />
        </div>
    );
};

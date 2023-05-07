import React from 'react';
import { ICONS } from '../../constants';

interface IconSelectorProps {
    onIconSelect: (iconName: string) => void;
}

export const IconSelector: React.FC<IconSelectorProps> = ({ onIconSelect }) => (
    <div>
        <p>Select an icon:</p>
        <div>
            {ICONS.map(icon => (
                <span
                    className="material-icons"
                    onClick={() => onIconSelect(icon)}
                >
                    {icon}
                </span>
            ))}
        </div>
    </div>
);

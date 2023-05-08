import React from 'react';
import { Icons } from '../../constants';

interface IconSelectorProps {
    onIconSelect: (iconName: string) => void;
}

export const IconSelector: React.FC<IconSelectorProps> = ({ onIconSelect }) => (
    <div>
        <p>Select an icon:</p>
        <div>
            {Object.values(Icons).map(iconName => (
                <span
                    key={iconName}
                    className="material-icons"
                    onClick={() => onIconSelect(iconName)}
                >
                    {iconName}
                </span>
            ))}
        </div>
    </div>
);

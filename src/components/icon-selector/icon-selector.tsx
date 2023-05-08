import React from 'react';
import { Icons } from '../../constants';
import './icon-selector.scss';

interface IconSelectorProps {
    onIconSelect: (iconName: string) => void;
}

const CN = 'icon-select';

export const IconSelector: React.FC<IconSelectorProps> = ({ onIconSelect }) => (
    <div className={`${CN}__container`}>
        <span>Select an icon:</span>
        <div className={`${CN}__icons-grid`}>
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

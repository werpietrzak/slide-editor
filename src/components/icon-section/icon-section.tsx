import React, { useState } from 'react';
import { Popover } from '@mui/material';
import { EditableText } from '../editable-text';
import { IconSelector } from '../icon-selector';
import './icon-section.scss';

interface IconSectionProps {
    placeholderIcon: string;
}

const CN = 'icon-section';

export const IconSection: React.FC<IconSectionProps> = ({
    placeholderIcon,
}) => {
    const [selectedIcon, setSelectedIcon] = useState<string>(placeholderIcon);
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

    const openIconSelect = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closeIconSelect = () => {
        setAnchorEl(null);
    };

    const handleSelectIcon = (iconName: string) => {
        setSelectedIcon(iconName);
        closeIconSelect();
    };

    return (
        <div className={`${CN}__container`}>
            <span className="material-icons" onClick={openIconSelect}>
                {selectedIcon}
            </span>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={closeIconSelect}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <IconSelector onIconSelect={handleSelectIcon} />
            </Popover>
            <EditableText
                placeholderText="Insert text here"
                className={`${CN}__title`}
            />
            <EditableText
                placeholderText="Add here your additional text"
                className={`${CN}__subtitle`}
            />
        </div>
    );
};

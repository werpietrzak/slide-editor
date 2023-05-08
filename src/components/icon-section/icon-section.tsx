import React, { useState } from 'react';
import { Popover } from '@mui/material';
import { EditableText } from '../editable-text';
import { IconSelector } from '../icon-selector';

interface IconSectionProps {
    placeholderIcon: string;
}

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
        <div>
            <div onClick={openIconSelect}>
                <span className="material-icons">{selectedIcon}</span>
            </div>
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
            <EditableText placeholderText="Insert text here" />
            <EditableText placeholderText="Add here your additional text" />
        </div>
    );
};

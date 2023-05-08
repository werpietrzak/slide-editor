import React from 'react';
import { DragAndDropArea } from '../drag-and-drop-area';
import { IconSection } from '../icon-section';
import { Icons } from '../../constants';
import { DraggableItem } from '../../models';

export const SlideContent: React.FC = () => {
    const items: DraggableItem[] = [
        {
            id: 'item-1',
            content: <IconSection placeholderIcon={Icons.Favorite} />,
        },
        {
            id: 'item-2',
            content: <IconSection placeholderIcon={Icons.PieChart} />,
        },
        {
            id: 'item-3',
            content: <IconSection placeholderIcon={Icons.ThumbUp} />,
        },
    ];

    return (
        <DragAndDropArea
            id="slide-content-area"
            direction="horizontal"
            draggableItems={items}
        />
    );
};

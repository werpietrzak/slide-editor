import React, { useState } from 'react';
import {
    DragDropContext,
    Draggable,
    Droppable,
    OnDragEndResponder,
} from 'react-beautiful-dnd';
import { IconSection } from '../icon-section';
import { Icons } from '../../constants';
import './slide-content.scss';

interface DraggableItem {
    id: string;
    content: JSX.Element;
}

export const SlideContent: React.FC = () => {
    const draggableItems: DraggableItem[] = [
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

    const [items, setItems] = useState(draggableItems);

    const handleDragEnd: OnDragEndResponder = result => {
        if (!result.destination) {
            return;
        }

        const newItems = items.slice();
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);

        setItems(newItems);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="list" direction="horizontal">
                {provided => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="container"
                    >
                        {items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {provided => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

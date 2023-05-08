import React, { useState } from 'react';
import {
    DragDropContext,
    Draggable,
    Droppable,
    OnDragEndResponder,
} from 'react-beautiful-dnd';
import { DraggableItem } from '../../models';
import './drag-and-drop-area.scss';

interface DragAndDropAreaProps {
    id: string;
    direction: 'horizontal' | 'vertical';
    draggableItems: DraggableItem[];
}

const CN = 'dnd-area';

export const DragAndDropArea: React.FC<DragAndDropAreaProps> = ({
    id,
    direction,
    draggableItems,
}) => {
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
            <Droppable droppableId={id} direction={direction}>
                {provided => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={
                            direction === 'horizontal'
                                ? `${CN}__horizontal-container`
                                : undefined
                        }
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
                                        className={`${CN}__draggable`}
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

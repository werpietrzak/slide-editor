import React from 'react';
import { Paper } from '@mui/material';
import { DragAndDropArea } from './components/drag-and-drop-area';
import { SlideContent } from './components/slide-content';
import { SlideTitle } from './components/slide-title';
import { DraggableItem } from './models';
import './App.scss';

const CN = 'app';

const App: React.FC = () => {
    const items: DraggableItem[] = [
        {
            id: 'slide-title',
            content: <SlideTitle />,
        },
        {
            id: 'slide-content',
            content: <SlideContent />,
        },
    ];

    return (
        <div className={`${CN}__container`}>
            <Paper className={`${CN}__slide-card`} elevation={2}>
                <DragAndDropArea
                    id="slide-area"
                    direction="vertical"
                    draggableItems={items}
                />
            </Paper>
        </div>
    );
};

export default App;

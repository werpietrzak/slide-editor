import React from 'react';
import { Button, Paper } from '@mui/material';
import jsPDF from 'jspdf';
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

    const generatePDF = () => {
        const report = new jsPDF('portrait', 'pt', 'a4');
        report.html(document.getElementById('report')!).then(() => {
            report.save('report.pdf');
        });
    };

    return (
        <div className={`${CN}__container`}>
            <Paper id="report" className={`${CN}__slide-card`} elevation={2}>
                <DragAndDropArea
                    id="slide-area"
                    direction="vertical"
                    draggableItems={items}
                />
            </Paper>
            <Button onClick={generatePDF} type="button">
                Export to PDF
            </Button>
        </div>
    );
};

export default App;

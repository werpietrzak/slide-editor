import React from 'react';
import { Paper } from '@mui/material';
import { SlideContent } from './components/slide-content';
import { SlideTitle } from './components/slide-title';
import './App.scss';

const CN = 'app';

const App: React.FC = () => (
    <div className={`${CN}__container`}>
        <Paper className={`${CN}__slide-card`} elevation={2}>
            <SlideTitle />
            <SlideContent />
        </Paper>
    </div>
);

export default App;

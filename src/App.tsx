import React from 'react';
import { SlideContent } from './components/slide-content';
import { SlideTitle } from './components/slide-title';
import './App.css';

const App: React.FC = () => (
    <>
        <SlideTitle />
        <SlideContent />
    </>
);

export default App;

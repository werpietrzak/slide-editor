import React from 'react';
import { IconSection } from './components/icon-section';
import { SlideTitle } from './components/slide-title';

import './App.css';

const App: React.FC = () => (
    <>
        <SlideTitle />
        <IconSection placeholderIcon="favorite" />
    </>
);

export default App;

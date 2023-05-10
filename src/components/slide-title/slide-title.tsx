import React from 'react';
import { EditableText } from '../editable-text';
import './slide-title.scss';

const CN = 'slide-title';

export const SlideTitle: React.FC = () => (
    <EditableText placeholderText="Insert a title here" className={CN} />
);

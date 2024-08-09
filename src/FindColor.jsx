import React from 'react';
import { useParams } from 'react-router-dom';
import ColorPage from './ColorPage';


function FindColor({ colors }) {
    const { name } = useParams();

    if (name) {
        const currentColor = colors.find(color => 
            (color.name.toLowerCase() === name.toLowerCase()
        ));
        return <ColorPage dog={currentColor} />;
    }
    return null;
}

export default FindColor;
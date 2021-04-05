import React from 'react';
import { parts } from '../utils/hangman.js';

function DrawHangman({ svgIndex }) {
    const hmParts = parts.slice(0, svgIndex);

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 271">
            <rect x="0" y="0" width="159" height="271" fill="#3e4350"></rect>
            {hmParts.map((part, i) => (
                <g key={i} id={`hm${i + 1}`}>
                    {part}
                </g>
            ))}
        </svg>
    );
}

export default DrawHangman;

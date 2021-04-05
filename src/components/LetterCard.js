import React from 'react';

function LetterCard({ letter, isFound }){

    return (
        <div className={`letter-card${isFound ? ' found' : ''}`}>
            <span>{letter}</span>
        </div>
    )
}

export default LetterCard;

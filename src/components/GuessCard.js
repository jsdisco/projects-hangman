import React from 'react';

function GuessCard({ letter, updateTriedLetters, isOut }){
    return (
        <div
            className={`guess-card${isOut ? ' out' : ''}`}
            onClick={() => updateTriedLetters(letter)}
        >
            <span>{letter}</span>
        </div>
    )
}

export default GuessCard;

import React from 'react';
import LetterCard from './LetterCard.js';

function Puzzle({ currWords, triedLetters, gameResult }) {
    return (
        <div className="puzzle">
            <div className="wrapper">
                {currWords.map((word, i) => {
                    const letters = word.toUpperCase().split('');
                    return (
                        <div key={i} className="puzzle-word">
                            {letters.map((letter, j) => {
                                const isFound =
                                    gameResult === -1 || gameResult === 1 ? true : triedLetters.includes(letter);
                                return <LetterCard key={j} letter={letter} isFound={isFound} />;
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Puzzle;

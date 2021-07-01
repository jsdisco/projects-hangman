import React from 'react';
import Spinner from './Spinner.js';
import LetterCard from './LetterCard.js';

function Puzzle({ isLoading, currWords, triedLetters, gameResult }) {
    return (
        <div className="puzzle">
            <div className="wrapper">
                {isLoading || !currWords ? (
                    <Spinner />
                ) : (
                    currWords.map((word, i) => {
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
                    })
                )}
            </div>
        </div>
    );
}

export default Puzzle;

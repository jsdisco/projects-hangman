import React from 'react';
import { alphabet } from '../utils/alphabet.js';
import GuessCard from './GuessCard.js';
import DrawHangman from './DrawHangman.js';

function PlayerArea({ triedLetters, updateTriedLetters, svgIndex, gameResult }) {
    return (
        <div className="wrapper">
            <div className="player-area">
                <div className="guesses">
                    {alphabet.map((letter, i) => {
                        const isOut = triedLetters.includes(letter);
                        return (
                            <GuessCard key={i} letter={letter} updateTriedLetters={updateTriedLetters} isOut={isOut} />
                        );
                    })}
                    {gameResult === -1 && (
                        <div className="overlay fail">
                            <span>FAIL!</span>
                        </div>
                    )}
                    {gameResult === 1 && (
                        <div className="overlay win">
                            <span>WIN!</span>
                        </div>
                    )}
                </div>
                <div className="fails">
                    <div className="hm-img">
                        <DrawHangman svgIndex={svgIndex} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerArea;

import React, { useState } from 'react';
import Controls from './components/Controls.js';
import Puzzle from './components/Puzzle.js';
import PlayerArea from './components/PlayerArea.js';
import getSvgChunks from './utils/svgChunks.js';
import useFetch from './hooks/useFetch.js';
import './css/hangman.css';

function Hangman() {
    const maxTries = 5;

    const [maxWords, setMaxWords] = useState(3);
    const [wrongTries, setWrongTries] = useState(0);
    const [triedLetters, setTriedLetters] = useState([]);
    const [gameResult, setGameResult] = useState(null); // 1->hasWon, -1->hasLost
    const [gameStatus, setGameStatus] = useState(0); // 0->initial, 1->hasStarted, 2->hasEnded

    const baseUrl = 'https://puzzle.mead.io/puzzle';
    const url = `${baseUrl}?wordCount=${maxWords}`;
    const [isLoading, errorMsg, currPuzzle] = useFetch(url, gameStatus);
    const currWords = currPuzzle && currPuzzle.puzzle.split(' ');

    function updateTriedLetters(thisTry) {
        if (gameStatus === 0) {
            setGameStatus(1);
        }
        const newTries = [...triedLetters];
        newTries.push(thisTry);
        setTriedLetters(newTries);

        if (currLetters.includes(thisTry)) {
            if (currLetters.every(letter => newTries.includes(letter))) {
                setGameResult(1);
                setGameStatus(2);
            }
        } else {
            if (wrongTries + 1 === maxTries) {
                setGameResult(-1);
                setGameStatus(2);
            }
            setWrongTries(prev => prev + 1);
        }
    }

    function updateMaxWords(e) {
        let newNum = e.target.closest('svg').id === 'maxWords-down' ? maxWords - 1 : maxWords + 1;
        setMaxWords(newNum);
    }

    function startGame() {
        setTriedLetters([]);
        setWrongTries(0);
        setGameResult(null);
        setGameStatus(0);
    }

    const currLetters = currWords ? currWords.join('').toUpperCase().split('') : [];
    const svgChunks = getSvgChunks(maxTries);

    return (
        <div className="hangman">
            <Controls maxWords={maxWords} updateMaxWords={updateMaxWords} startGame={startGame} />
            {errorMsg && <p>{errorMsg}</p>}
            <Puzzle isLoading={isLoading} currWords={currWords} triedLetters={triedLetters} gameResult={gameResult} />
            {currWords && (
                <PlayerArea
                    triedLetters={triedLetters}
                    updateTriedLetters={updateTriedLetters}
                    svgIndex={svgChunks[wrongTries]}
                    gameResult={gameResult}
                />
            )}
        </div>
    );
}

export default Hangman;

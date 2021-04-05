import React from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa';

function Controls({ maxWords, updateMaxWords, startGame }) {
    return (
        <div className="wrapper">
            <div className="controls">
                <button onClick={startGame}>New game</button>
                <div className="controls-words-box">
                    <span>words:</span>
                    <div className="controls-words">
                        <FaArrowAltCircleDown
                            id="maxWords-down"
                            className={maxWords === 1 ? 'disabled' : ''}
                            onClick={updateMaxWords}
                        />
                        <span>{maxWords}</span>
                        <FaArrowAltCircleUp
                            id="maxWords-up"
                            className={maxWords === 4 ? 'disabled' : ''}
                            onClick={updateMaxWords}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Controls;

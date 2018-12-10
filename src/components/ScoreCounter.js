import React, {useState} from 'react';

const Scoring = () => {
    const [score, setScore] = useState(0);
    const handlers = {
        increment: () => setScore(score + 1),
        decrement: () => setScore(score - 1),
    };

    return [score, handlers];
};

const ScoreCounter = () => {
    const [score, {increment, decrement}] = Scoring();

    return (
        <div>
            <button onClick={decrement}>-</button>
            {score}
            <button onClick={increment}>+</button>
        </div>
    )
};

export default ScoreCounter;
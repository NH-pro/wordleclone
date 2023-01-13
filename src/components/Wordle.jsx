import React, { useEffect } from "react";
import useWordle from "../hooks/useWorlde";
import Grid from "./Grid";
import Keypad from "./Keypad";
import keys from "../constants/keys";

export default function Wordle({ solution }) {
    const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    return (
        <div>
            <div>Current Guess - {currentGuess}</div>
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
            <Keypad keys={keys} usedKeys={usedKeys}/>
        </div>
    )
}
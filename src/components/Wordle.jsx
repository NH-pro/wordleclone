import React, { useEffect } from "react";
import useWordle from "../hooks/useWorlde";
import Grid from "./Grid";

export default function Wordle({ solution }) {
    const { currentGuess, guesses, turn, isCorrect, handleKeyup } = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup]);

    return (
        <div>
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
        </div>
    )
}
import React, { useState, useEffect } from "react";
import useWordle from "../hooks/useWorlde";
import Grid from "./Grid";
import Keypad from "./Keypad";
import keys from "../constants/keys";
import Modal from "./Modal";

export default function Wordle({ solution }) {
    const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution);

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyup)
        }
        if (turn > 5) {
            window.removeEventListener('keyup', handleKeyup)
            setTimeout(() => setShowModal(true), 2000)
        }

        return () => window.removeEventListener('keyup', handleKeyup);
    }, [handleKeyup, isCorrect, turn]);

    return (
        <div>
            <div>Current Guess - {currentGuess}</div>
            <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
            <Keypad keys={keys} usedKeys={usedKeys}/>
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    )
}
import React, { useEffect } from "react";
import useWordle from "../hooks/useWorlde";

export default function Wordle({ solution }) {
    const { currentGuess, handleKeyup } = useWordle(solution);
}
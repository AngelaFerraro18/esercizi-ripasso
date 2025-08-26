import { useState, useCallback } from "react";

export default function Numeri() {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    // TODO: crea una funzione con useCallback per aggiungere un numero random

    const randomNum = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        setNumbers(prev => [...prev, randomNumber]);
    }, []);

    //salvo in una variabile la funzione memoizzata con useCallback e la vado ad applicare direttamente nel codice 


    return (
        <div>
            <ul>
                {numbers.map((n, i) => (
                    <li key={i}>{n}</li>
                ))}
            </ul>
            <button onClick={randomNum}> Aggiungi numero </button>
        </div>
    );
}

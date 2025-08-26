import { useState, useCallback } from "react";

export default function Numeri2() {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addRandomNumber = useCallback(() => {
        // TODO: aggiungi un numero random a numbers
        const randomNum = Math.floor(Math.random() * 10) + 1;

        setNumbers(prev => [...prev, randomNum]);

    }, []);

    return (
        <div>
            <ul>
                {numbers.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
            <button onClick={addRandomNumber}>Aggiungi numero</button>
        </div>
    );
}

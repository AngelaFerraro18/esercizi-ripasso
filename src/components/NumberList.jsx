import { useState, useCallback } from "react";

export default function NumberList() {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    // TODO: usa useCallback per creare una funzione che aggiunge un numero random alla lista
    // const addNumber = () => {
    //     const random = Math.floor(Math.random() * 100);
    //     setNumbers(prev => [...prev, random]);
    // };

    const addNumber = useCallback(() => {
        const random = Math.floor(Math.random() * 100);
        setNumbers(prev => [...prev, random]);
    }, []);

    return (
        <div>
            <ul>
                {numbers.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
            <button onClick={addNumber}>Aggiungi numero</button>
        </div>
    );
}

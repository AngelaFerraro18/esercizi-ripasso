import { useState, useMemo } from "react";

export default function Somma2() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);
    const [text, setText] = useState("");

    const somma = useMemo(() => {
        // TODO: calcola la somma dei numeri

        const sommaNum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sommaNum;

    }, [numbers]); // attenzione alle dipendenze

    return (
        <div>
            <h3>Somma: {somma}</h3>
            <input value={text} onChange={e => setText(e.target.value)} />
        </div>
    );
}

import { useState, useMemo } from "react";

export default function ExpensiveCalculation() {
    const [number, setNumber] = useState(0);

    // TODO: usa useMemo per calcolare un valore "costoso" in base a number
    const calculation = useMemo(() => {

        return (number * number) / 2;
    }, [number])

    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
            <p>Risultato: {calculation}</p>
        </div>
    );
}

import { useState, useMemo } from "react";

export default function SumNumbers() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [multiplier, setMultiplier] = useState(1);

    // TODO: usa useMemo per calcolare la somma dei numeri moltiplicati per multiplier
    const sum = useMemo(() => {
        const somma = numbers.reduce((acc, curr) => acc + curr, 0);
        const multiple = somma * multiplier;

        return multiple;
    }, [multiplier, numbers])

    return (
        <div>
            <h2>Somma numeri</h2>
            <input
                type="number"
                value={multiplier}
                onChange={e => setMultiplier(Number(e.target.value))}
                placeholder="Moltiplicatore"
            />
            <p>Risultato: {sum}</p>
        </div>
    );
}

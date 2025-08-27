import { useState, useMemo } from "react";

export default function SquareCalculator() {
    const [num, setNum] = useState(0);
    const [renders, setRenders] = useState(0);

    const squared = useMemo(() => {
        // TODO: calcola num * num
        const squaredNum = num ** 2;
        return squaredNum;
    }, [num]);

    return (
        <div>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(Number(e.target.value))}
            />
            <p>Quadrato: {squared}</p>
            <button onClick={() => setRenders(r => r + 1)}>
                Forza nuovo render ({renders})
            </button>
        </div>
    );
}

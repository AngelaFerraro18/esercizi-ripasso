import { useState, useMemo } from "react";

export default function Somma() {
    const [numbers] = useState([10, 20, 30, 40, 50]);
    const [text, setText] = useState("");

    // TODO: usa useMemo per calcolare la somma dei numeri
    const somma = useMemo(() => {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }, [numbers]);  //qui useMemo mi aiuta ad evitare ricalcoli al cambiare dell'array di numeri

    return (
        <div>
            <h3>Somma: {somma}</h3>
            <input
                type="text"
                placeholder="Scrivi qualcosa..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}

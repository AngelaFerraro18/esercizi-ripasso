import { useState, useCallback } from "react";

function IncrementButton({ onIncrement }) {
    console.log("Render Button"); // osserva quando il componente si ri-renderizza
    return <button onClick={onIncrement}>+1</button>;
}

export default function Counter2() {
    const [count, setCount] = useState(0);

    // TODO: usa useCallback per creare la funzione increment
    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, [])

    return (
        <div>
            <p>Contatore: {count}</p>
            <IncrementButton onIncrement={increment} />
        </div>
    );
}

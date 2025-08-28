import { useState, useCallback } from "react";

function Button({ onClick }) {
    console.log("Render Button");
    return <button onClick={onClick}>Clicca</button>;
}

export default function CallbackDemo() {
    const [count, setCount] = useState(0);

    // TODO: crea una funzione memoizzata per incrementare count usando useCallback

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <div>
            <p>Contatore: {count}</p>
            <Button onClick={increment} />
        </div>
    );
}

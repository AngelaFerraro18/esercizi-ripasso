import { useState } from "react";

// TODO: scrivi un custom hook che ritorna count, increment, decrement, reset
export function useCounter(initialValue = 0) {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);
    const reset = () => setCounter(0);

    return { counter, increment, decrement, reset };
}

export default function Contatore2() {
    const { counter, increment, decrement, reset } = useCounter(5);

    return (
        <div>
            <h3>Valore: {counter}</h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

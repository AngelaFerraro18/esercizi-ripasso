import { useState } from "react";

// TODO: crea il custom hook useCounter
function useCounter(initialValue = 0) {

    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(prev => prev + 1);
    };

    function decrement() {
        setCount(prev => prev - 1);
    };

    function reset() {
        setCount(0);
    }

    return { count, increment, decrement, reset };
}

export default function CounterWithHook() {
    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <div>
            <h3>Contatore: {count}</h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

import { useState } from "react";

// TODO: crea un custom hook useCounter

//il custom hook deve essere una funzione che può usare altri hook e deve iniziare con use, può restituire valori, funzioni, oggetti o anche JSX. Posso impostare un valore iniziale come parametro oppure usarlo nello useState
function useCounter() {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev - 1);
    const reset = () => setCounter(0);

    return { increment, decrement, reset, counter };
}

export default function Contatore() {
    // TODO: usa il custom hook
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h3>Valore: {counter}</h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

import { useRef } from "react";

export default function CounterRef() {
    const countRef = useRef(0);

    function increment() {
        // aumenta countRef.current
        // e logga il valore in console

        countRef.current += 1;
        console.log(countRef.current);
    }

    return (
        <div>
            <button onClick={increment}>Incrementa</button>
            <p>Guarda la console per vedere il valore!</p>
        </div>
    );
}

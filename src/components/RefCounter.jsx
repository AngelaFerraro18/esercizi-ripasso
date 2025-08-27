import { useRef, useState } from "react";

export default function RefCounter() {
    const countRef = useRef(0); // TODO: usa questo ref per memorizzare il contatore
    const [, setDummy] = useState(0); // solo per forzare il render se vuoi visualizzare il valore

    function increment() {
        // TODO: incrementa countRef.current

        countRef.current += 1;
    }

    return (
        <div>
            <p>Valore contatore: {countRef.current}</p>
            <button onClick={increment}>Incrementa</button>
            <button onClick={() => setDummy(d => d + 1)}>Aggiorna display</button>
        </div>
    );
}

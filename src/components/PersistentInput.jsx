import { useState, useEffect } from "react";

export default function PersistentInput() {
    const [text, setText] = useState("");

    useEffect(() => {
        // TODO: al mount, carica da localStorage
        const testo = localStorage.getItem('text');

        if (testo) {
            setText(testo);
        }
    }, []);

    useEffect(() => {
        // TODO: ogni volta che cambia text, salva in localStorage
        localStorage.setItem('text', text);
    }, [text]);

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Valore salvato: {text}</p>
        </div>
    );
}

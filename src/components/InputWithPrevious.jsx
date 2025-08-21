import { useState, useRef, useEffect } from "react";

// custom hook
function usePrevious(value) {
    // usa useRef per salvare il valore
    const valueRef = useRef();
    // aggiorna il ref ad ogni render

    useEffect(() => {
        valueRef.current = value;
    }, [value])

    // ritorna il valore precedente
    return valueRef.current;
}

export default function InputWithPrevious() {
    const [text, setText] = useState("");
    const prevText = usePrevious(text);

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Scrivi qualcosa..."
            />
            <p>Valore attuale: {text}</p>
            <p>Valore precedente: {prevText}</p>
        </div>
    );
}

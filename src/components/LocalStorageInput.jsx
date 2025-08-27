import { useState, useEffect } from "react";

// TODO: crea il custom hook useLocalStorage
function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        const savedText = localStorage.getItem(key);
        return savedText !== null ? savedText : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value])

    return [value, setValue];
}

export default function LocalStorageInput() {
    const [text, setText] = useLocalStorage("myText", "");

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Salvato: {text}</p>
        </div>
    );
}

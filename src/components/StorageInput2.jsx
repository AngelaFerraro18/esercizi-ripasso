import { useState, useEffect } from "react";

// TODO: crea un custom hook useLocalStorage
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved !== null ? saved : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);


    return [value, setValue];
}




export default function StorageInput2() {
    const [text, setText] = useLocalStorage("myText", "");

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <p>Salvato: {text}</p>
        </div>
    );
}

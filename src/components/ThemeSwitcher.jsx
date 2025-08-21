import { useState, useEffect } from "react";

// custom hook
function useLocalStorage(key, initialValue) {
    // recupera il valore iniziale da localStorage (se esiste), altrimenti usa initialValue
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;


    // usa useState con il valore iniziale
    const [value, setValue] = useState(initial);

    // usa useEffect per aggiornare localStorage ogni volta che cambia lo state
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // ritorna [value, setValue]
    return [value, setValue];
}

export default function ThemeSwitcher() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", height: "100vh" }}>
            <h1>Tema attuale: {theme}</h1>
            <button onClick={toggleTheme}>Cambia tema</button>
        </div>
    );
}

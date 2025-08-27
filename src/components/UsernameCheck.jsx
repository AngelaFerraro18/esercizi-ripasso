import { useCallback, useState } from "react";

export default function UsernameCheck() {
    const [username, setUsername] = useState("");
    const [status, setStatus] = useState("");

    const existingUsers = ["Mario", "Luigi", "Peach", "Yoshi"];

    // TODO: crea la funzione debounce
    // function debounce(func, delay) { ... }
    function debounce(func, delay) {
        let timer;
        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(value);
            }, delay);
        }
    }

    // TODO: crea la funzione checkUsername che verifica se username è già in existingUsers
    const checkUsername = (value) => {
        if (existingUsers.includes(value)) {
            setStatus("Username già in uso");
        } else {
            setStatus("Username disponibile");
        }
    };

    // TODO: applica debounce a checkUsername
    const debouncedCheck = useCallback(debounce(checkUsername, 700), []); // sostituisci con la versione debounce

    return (
        <div>
            <h2>Verifica Username</h2>
            <input
                type="text"
                placeholder="Scrivi username..."
                value={username}
                onChange={e => {
                    setUsername(e.target.value);
                    // TODO: chiama la funzione debounce qui
                    debouncedCheck(e.target.value);
                }}
            />
            <p>{status}</p>
        </div>
    );
}

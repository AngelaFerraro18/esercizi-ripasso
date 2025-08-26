import { useState, useEffect } from "react";

export default function SalvaNome2() {
    const [name, setName] = useState("");

    useEffect(() => {
        const savedName = localStorage.getItem('name');

        if (savedName) {
            setName(savedName);
        }
    }, []) // TODO: recupera il valore da localStorage al montaggio


    // TODO: salva name in localStorage quando cambia
    useEffect(() => localStorage.setItem('name', name), [name]);


    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <p>Ciao, {name}</p>
        </div>
    );
}

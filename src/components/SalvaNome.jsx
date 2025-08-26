import { useState, useEffect } from "react";

export default function SalvaNome() {
    const [name, setName] = useState("");

    useEffect(() => {
        // TODO: recupera il valore da localStorage all'avvio
        const value = localStorage.getItem('name'); //andiamo a prende il valore con getItem, dobbiamo ricordare che tutto quello che è salvato nello storage è una STRINGA.
        if (value) {
            setName(value);
        }

        //se abbiamo un valore allora lo settiamo come valore con con setName
    }, []);

    useEffect(() => {
        // TODO: salva il valore in localStorage ogni volta che cambia name
        localStorage.setItem('name', name);
        //ogni volta che digiterò un nome nell'input verrà salvata la chiave 'nome' e il suo valore sarà quello dato dalla variabile di stato name e sarà salvata come stringa
    }, [name]);

    return (
        <div>
            <input
                type="text"
                placeholder="Inserisci il tuo nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Ciao, {name}</p>
        </div>
    );
}

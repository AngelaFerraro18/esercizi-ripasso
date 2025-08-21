import { useRef, useState } from "react";

export default function CheckboxCounter() {
    const [checked, setChecked] = useState(false);
    const changeCountRef = useRef(0);

    function handleChange() {
        // aggiorna lo state del checkbox
        setChecked(prev => !prev);

        // incrementa changeCountRef.current
        changeCountRef.current += 1;

        // logga in console quante volte è stato cambiato
        console.log('Il valore è cambiato:', changeCountRef.current)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleChange} />
                Cliccami!
            </label>
            <p>Guarda la console per il numero di cambiamenti!</p>
        </div>
    );
}

import { useRef, useState } from "react";

export default function PreviousValueInput() {
    const [value, setValue] = useState("");
    const prevValueRef = useRef("");

    function handleChange(e) {
        const newValue = e.target.value;

        // logga il valore precedente usando prevValueRef
        console.log('valore precedente', prevValueRef.current);

        // aggiorna prevValueRef con il nuovo valore
        prevValueRef.current = newValue;
        // aggiorna lo state con setValue
        setValue(newValue);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} placeholder="Scrivi qualcosa..." />
        </div>
    );
}

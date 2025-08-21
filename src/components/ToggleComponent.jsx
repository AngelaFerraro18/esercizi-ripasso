import { useState } from "react";

// custom hook
function useToggle(initialValue = false) {
    // qui definisci lo state
    // ritorna [value, toggleFunction]

    const [value, setValue] = useState(initialValue);

    function toggleFunction() {
        setValue(prev => !prev);
    }
    return [value, toggleFunction];
}

export default function ToggleComponent() {
    const [isVisible, toggle] = useToggle();

    return (
        <div>
            <button onClick={toggle}>
                {isVisible ? "Nascondi" : "Mostra"}
            </button>
            {isVisible && <p>Questo testo può essere nascosto!</p>}
        </div>
    );
}

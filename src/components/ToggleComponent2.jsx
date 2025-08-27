import { useState } from "react";

// TODO: crea il custom hook useToggle
function useToggle(initialValue = false) {
    const [isOn, setIsOn] = useState(initialValue);

    function toggle() {
        setIsOn(prev => !prev);
    }


    return [isOn, toggle];
}

export default function ToggleComponent2() {
    const [isOn, toggle] = useToggle(false);

    return (
        <div>
            <p>Stato: {isOn ? "ON" : "OFF"}</p>
            <button onClick={toggle}>Cambia stato</button>
        </div>
    );
}

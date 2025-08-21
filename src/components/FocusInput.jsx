import { useRef } from "react";

export default function FocusInput() {
    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputRef} placeholder="Scrivi qui..." />
            <button onClick={handleFocus}>Metti il focus</button>
        </div>
    );
}

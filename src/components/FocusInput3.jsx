import { useRef } from "react";

export default function FocusInput3() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        // TODO: metti il focus sull'input usando inputRef
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Scrivi qui..." />
            <button onClick={handleFocus}>Focus</button>
        </div>
    );
}

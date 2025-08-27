import { useRef } from "react";

export default function FocusInput4() {
    const inputRef = useRef(null);

    function handleFocus() {
        // TODO: usa .current.focus()
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Scrivi qui..." />
            <button onClick={handleFocus}>Focus</button>
        </div>
    );
}

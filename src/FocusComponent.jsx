import { useRef } from "react";

// TODO: crea il custom hook useFocus
function useFocus() {
    const inputRef = useRef(null);

    function setFocus() {
        inputRef.current.focus();
    }

    return [inputRef, setFocus];
}

export default function FocusComponent() {
    const [inputRef, setFocus] = useFocus();

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Scrivi qui..." />
            <button onClick={setFocus}>Focus</button>
        </div>
    );
}

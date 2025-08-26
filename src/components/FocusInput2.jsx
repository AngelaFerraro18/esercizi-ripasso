import { useRef } from "react";

export default function FocusInput2() {
    // TODO: crea una ref
    const inputRef = useRef(); //salvo in una variabile il useRef(), crea una ref che può essere collegata a un elemento DOM

    const handleClick = () => {
        // TODO: usa la ref per mettere il focus sull'input
        inputRef.current.focus(); //vado a prendere il valore corrente dell'elemento tramite .current e poi vado ad applicare il metodo .focus(). Importante, devo ricordare di collegare l'elemento con ref = {inputRef}.
    };

    return (
        <div>
            <input type="text" placeholder="Scrivi qui..." ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    );
}

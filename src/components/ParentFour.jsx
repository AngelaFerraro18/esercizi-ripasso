import React, { useState, useCallback } from "react";

function Button({ onClick, label }) {
    console.log("Button render:", label);
    return <button onClick={onClick}>{label}</button>;
}

function AddButton({ onAdd }) {
    console.log('AddButton render');
    return <button onClick={onAdd}>Aggiungi</button>
}

function AlertButton({ onAlert }) {
    console.log('AlertButton');
    return <button onClick={onAlert}>Mostra alert</button>
}

const MemoButton = React.memo(Button);
const MemoAdd = React.memo(AddButton);
const MemoAlert = React.memo(AlertButton);

export default function ParentFour() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // TODO: crea increment con useCallback
    const increment = useCallback(() => setCount(prev => prev + 1), []);
    const add = useCallback(() => setCount(prev => prev + 1), []);
    const handleAlert = useCallback(() => alert(`Current count:${count}`), [count]);

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <p>Count: {count}</p>
            <MemoButton onClick={increment} label="Increment" />
            <MemoAdd onAdd={add} />
            <MemoAlert onAlert={handleAlert} />
        </div>
    );
}

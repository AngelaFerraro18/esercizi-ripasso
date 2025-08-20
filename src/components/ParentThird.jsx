import React, { useCallback, useState } from "react";

function Button({ onClick, label }) {
    console.log("Button render:", label);
    return <button onClick={onClick}>{label}</button>;
}

const MemoButton = React.memo(Button);


export default function ParentThird() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Click me");

    const counter = useCallback(() => setCount(prev => prev + 1), []);

    const clickButton = useCallback(() => alert("Clicked!"), []);

    return (
        <div>
            <button onClick={counter}>Increment {count}</button>
            <input value={text} onChange={e => setText(e.target.value)} />
            <MemoButton onClick={clickButton} label={text} />
        </div>
    );
}

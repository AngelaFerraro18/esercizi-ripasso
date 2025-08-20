import React from "react";

function Child({ text }) {
    console.log("Child render:", text);
    return <p>{text}</p>;
}

const MemoChild = React.memo(Child);

export default function ParentChild() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("Hello");

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment {count}</button>
            <input value={text} onChange={e => setText(e.target.value)} />
            <MemoChild text={text} />
        </div>
    );
}

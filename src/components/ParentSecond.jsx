import React, { useMemo, useState } from "react";

function Child({ user }) {
    console.log("Child render:", user.name);
    return <p>{user.name} - {user.age}</p>;
}

const MemoChild = React.memo(Child);

export default function ParentSecond() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Alice");
    const [age, setAge] = useState(25);

    const user = useMemo(() => ({ name, age }), [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment {count}</button>
            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={age} onChange={e => setAge(+e.target.value)} />
            <MemoChild user={user} />
        </div>
    );
}

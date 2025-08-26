import React from "react";

const Item = ({ value }) => {
    console.log("Render:", value);
    return <li>{value}</li>;
};

// TODO: avvolgi Item con React.memo

const ItemMemo = React.memo(Item)

export default function Lista2() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <ul>
                <ItemMemo value={1} />
                <ItemMemo value={2} />
            </ul>
            <button onClick={() => setCount(count + 1)}>Incrementa ({count})</button>
        </div>
    );
}

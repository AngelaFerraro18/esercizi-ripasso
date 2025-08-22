import { useReducer, useState } from "react";

const initialState = []; // array vuoto all'inizio

function reducer(state, action) {
    switch (action.type) {
        // 👇 qui dovrai gestire i casi "add" e "remove"
        case 'add':
            return [...state, action.payload];

        case 'remove':
            return state.filter((__, i) => i !== action.payload);
        default:
            return state;
    }
}

export default function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [task, setTask] = useState("");

    function handleAdd() {
        // 👇 qui devi chiamare dispatch con type "add" e payload = task
        dispatch({ type: 'add', payload: task })
        setTask("");
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Nuovo task..."
            />
            <button onClick={handleAdd}>Aggiungi</button>

            <ul>
                {state.map((t, i) => (
                    <li key={i}>
                        {t}
                        {/* 👇 qui devi chiamare dispatch con type "remove" e payload = indice */}
                        <button onClick={() => dispatch({ type: 'remove', payload: i })} >Rimuovi</button>
                    </li>
                ))}
            </ul>
        </div >
    );
}

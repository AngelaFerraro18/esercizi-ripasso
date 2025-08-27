import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            // TODO: incrementa count
            return { count: state.count + 1 };
        case "decrement":
            // TODO: decrementa count
            return { count: state.count - 1 };
        case "reset":
            // TODO: reset a 0
            return { count: state.count = 0 };
        default:
            return state;
    }
}

export default function CounterReducer2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Valore: {state.count}</h3>
            <button onClick={() => dispatch({ type: "increment" })}>+1</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}

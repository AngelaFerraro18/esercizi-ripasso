import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            // TODO
            return { count: state.count + 1 };
        case "decrement":
            // TODO
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Contatore: {state.count}</h3>
            <button onClick={() => dispatch({ type: "increment" })}>+1</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        </div>
    );
}

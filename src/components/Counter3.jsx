import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            // TODO: incrementa lo stato
            return { count: state.count + 1 }
        case "decrement":
            // TODO: decrementa lo stato
            return { count: state.count - 1 }
        default:
            return state;
    }
}

export default function Counter3() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Contatore: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+1</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        </div>
    );
}

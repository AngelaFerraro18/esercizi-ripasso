import { createContext, useContext, useMemo, useState } from "react";


const CountContext = createContext(null);


export function useCount() {
    return useContext(CountContext);
}


export function CountProvider({ children }) {
    const [count, setCount] = useState(0);
    const [label, setLabel] = useState("Clicks");


    // TODO: memoizza il value
    const value = useMemo(() => ({ count, label, setCount, setLabel }), [count, label]);


    return <CountContext.Provider value={value}>{children}</CountContext.Provider>;
}


export function Panel() {
    const { count, label } = useCount();
    return <h3>{label}: {count}</h3>;
}


export default function App() {
    return (
        <CountProvider>
            <Panel />
            {/* altri componenti che non devono ri-renderizzare per label se usano solo count, ecc. */}
        </CountProvider>
    );
}
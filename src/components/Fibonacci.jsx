import { useMemo, useRef, useState } from "react";


function slowFib(n) {
    if (n <= 1) return n;
    return slowFib(n - 1) + slowFib(n - 2);
}


export default function Fibonacci() {
    const [n, setN] = useState(35); // valori 1..40
    const [zoom, setZoom] = useState(1);
    const renders = useRef(0); renders.current++;


    // TODO: memoizza il risultato di slowFib(n)
    const value = useMemo(() => slowFib(n), [n]); //useMemo accetta una callback fn e un array di dipendenze. In questo caso n è quello che al suo variare comporterà un render. 


    return (
        <div >
            <p>Render count: {renders.current}</p>
            <label>
                n: <input type="number" value={n} min={0} max={40} onChange={e => setN(+e.target.value)} />
            </label>
            <label>
                zoom: <input type="range" min={1} max={3} step={0.1} value={zoom} onChange={e => setZoom(+e.target.value)} />
            </label>
            <div style={{ transform: `scale(${zoom})`, transformOrigin: "left top" }}>
                <p>fib({n}) = {value}</p>
            </div>
        </div>
    );
}
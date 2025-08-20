import { useEffect, useMemo, useState } from "react";


function Child({ options }) {
    useEffect(() => {
        console.log("options changed", options);
    }, [options]);
    return <pre>{JSON.stringify(options, null, 2)}</pre>;
}


export default function Parent() {
    const [dark, setDark] = useState(false);
    const [title, setTitle] = useState("Dashboard");


    // TODO: restituisci sempre lo stesso riferimento finché dark/title non cambiano
    // const options = /* useMemo(...) */ ({ theme: dark ? "dark" : "light", title });

    const options = useMemo(() => ({ theme: dark ? "dark" : "light", title }), [title, dark]);

    return (
        <div>
            <label>
                Titolo: <input value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Dark mode: <input type="checkbox" checked={dark} onChange={e => setDark(e.target.checked)} />
            </label>
            <Child options={options} />
        </div>
    );
}
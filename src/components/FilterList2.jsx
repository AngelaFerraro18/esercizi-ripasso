import { useState, useCallback } from "react";

export default function FilterList2() {
    const [items] = useState(["Mela", "Banana", "Ciliegia", "Pera"]);
    const [query, setQuery] = useState("");

    // TODO: crea con useCallback una funzione filterItems che filtra gli items in base alla query
    const filterItems = useCallback(() => {
        return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    }, [items, query])

    const filtered = filterItems();

    return (
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Cerca..." />
            <ul>
                {filtered.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    );
}

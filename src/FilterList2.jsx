import { useCallback, useState } from "react";

export default function FilterList2() {
    const items = ["React", "JavaScript", "HTML", "CSS"];
    const [query, setQuery] = useState('');
    // TODO: crea la funzione per filtrare gli elementi
    const filteredItems = useCallback(() => {
        const filtered = items.filter(i => i.includes(query));

        return filtered;
    }, [query])

    return (
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {filteredItems().map((i, index) => <li key={index}>{i}</li>)}
            </ul>
        </div>
    );
}

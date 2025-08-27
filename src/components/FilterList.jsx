import { useState, useCallback } from "react";

export default function FilterList() {
    const [query, setQuery] = useState("");
    const names = ["Anna", "Paolo", "Lucia", "Marco", "Sara"];

    const filterNames = useCallback(() => {
        // TODO: ritorna i nomi che includono query (case insensitive)
        const filteredNames = names.filter(n => n.includes(query));

        return filteredNames;
    }, [query]);

    return (
        <div>
            <input
                type="text"
                placeholder="Cerca..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filterNames().map((name, i) => (
                    <li key={i}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

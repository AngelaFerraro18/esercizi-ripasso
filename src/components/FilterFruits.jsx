import { useMemo, useState } from "react";

export default function FilterFruits() {
    const [fruits] = useState(["Mela", "Banana", "Ciliegia", "Pera", "Uva"]);
    const [query, setQuery] = useState("");

    // TODO: usa useMemo per filtrare i frutti in base alla query
    const filteredFruits = useMemo(() => {

        const filtered = fruits.filter(item => item.toLowerCase().includes(query.toLowerCase()));

        return filtered;

    }, [query])

    return (
        <div>
            <h2>Filtra frutti</h2>
            <input
                type="text"
                placeholder="Cerca frutto..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <ul>
                {filteredFruits.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}

import { useCallback, useState } from "react";

export default function DebounceSearch() {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState([]);
    const items = ["Mela", "Banana", "Ciliegia", "Pera", "Arancia", "Uva", "Kiwi"];

    // TODO: crea qui la funzione di debounce
    // function debounce(func, delay) { ... }
    function debounce(func, delay) {
        let timer;
        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(value);
            }, delay);
        };
    };

    // TODO: crea una funzione search che filtra items in base alla query
    const handleSearch = (value) => {
        const filtered = items.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    // TODO: applica la funzione di debounce a handleSearch
    const debouncedFilter = useCallback(debounce(handleSearch, 500), []);

    return (
        <div>
            <h2>Ricerca frutti con debounce</h2>
            <input
                type="text"
                placeholder="Cerca un frutto..."
                value={query}
                onChange={e => {
                    setQuery(e.target.value);
                    // TODO: chiama la funzione debounce qui
                    debouncedFilter(e.target.value);
                }}
            />
            <ul>
                {filteredItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    );
}

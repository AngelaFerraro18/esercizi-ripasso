import { useMemo, useState } from "react";


function makeProducts(count = 5000) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push({ id: i, name: `Prodotto ${i}`, price: (Math.random() * 100).toFixed(2) });
    }
    return arr;
}


export default function Catalog() {
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState("name"); // "name" | "price"


    // TODO: crea la base una volta sola
    const products = useMemo(() => makeProducts(), [])


    // TODO: filtra e ordina con useMemo in base a [products, query, sortBy]
    const view = useMemo(() => {
        const filteredProduct = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

        if (sortBy === 'name') {
            return filteredProduct.sort((a, b) => a.name - b.name);
        }

        if (sortBy === 'price') {
            return filteredProduct.sort((a, b) => a.price - b.price);
        }

        return filteredProduct;
    }, [products, query, sortBy])


    return (
        <div>
            <input placeholder="Cerca" value={query} onChange={e => setQuery(e.target.value)} />
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="name">Nome</option>
                <option value="price">Prezzo</option>
            </select>
            <ul>
                {view.slice(0, 50).map(p => (
                    <li key={p.id}>{p.name} – €{p.price}</li>
                ))}
            </ul>
            <small>Mostrati solo i primi 50 per brevità.</small>
        </div>
    );
}
import { useCallback, useEffect, useState } from "react";


// funzione di debounce
function debounce(callback, delay) {

    let timeout;
    return (value) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(value);
        }, delay);
    };
};

function Autocomplete() {

    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);


    function fetchApi(query) {
        if (query.trim() === '') {
            setList([]);
            return;
        }

        fetch(`http://localhost:3333/products?search=${query}`)
            .then(res => res.json())
            .then(data => setList(data));
    }

    useEffect(() => {
        debouncedFetch(query);
    }, [query]);


    const debouncedFetch = useCallback(debounce(fetchApi, 500), [])

    return (
        <>
            <label>
                Fai una ricerca
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
                <ul>
                    {list.map(li => <li key={li.id}>
                        <p>{li.name}</p>
                    </li>)}
                </ul>
            </label>

        </>
    )
}

export default Autocomplete;
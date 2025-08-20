import React, { useEffect, useState, useMemo } from "react";

function PoliticianList() {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState('');

    async function politicsFetch() {
        const response = await fetch('http://localhost:3333/politicians');
        const data = await response.json();
        console.log(data);
        return setList(data);

    };

    const filteredPoliticians = useMemo(() => {
        const filtered = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
        return filtered;
    }, [search, list])

    useEffect(() => { politicsFetch() }, []);

    // card 
    function Card({ data }) {

        console.log('Card dei politici.')
        return <ul>
            {data.length > 0 ? (data.map(p => <li key={p.id}>
                <h4>{p.name}</h4>
                <img src={p.image} alt={p.name} />
                <p>Position: {p.position}</p>
                <p>Bio: {p.biography}</p>
            </li>)) : <p>Nessun politico trovato!</p>}
        </ul>
    }

    const PoliticianCard = React.memo(Card);

    return (
        <>
            <h1>Lista politici</h1>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <PoliticianCard data={filteredPoliticians} />
        </>
    )
}

export default PoliticianList;
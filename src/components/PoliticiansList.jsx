import React, { useEffect, useState, useMemo, } from "react";

function PoliticiansList() {

    const [list, setList] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(`http://localhost:3333/politicians`)
            .then(res => res.json())
            .then(data => setList(data))
            .catch(err => console.error(err))
    }, []);


    const filteredPolitician = useMemo(() => {

        const filtered = list.filter(p => (p.name.toLowerCase().includes(query.toLowerCase())) || (p.biography.toLowerCase().includes(query.toLowerCase())));

        return filtered;

    }, [query, list]);


    function PoliticianCard({ data }) {
        const { name, image, position, biography } = data;
        console.log('Card dei politici', name);

        return (
            <li>
                <p>{name}</p>
                <img style={{ width: 150, height: 200 }} src={image} alt={name} />
                <p>Position: {position}</p>
                <p>Bio: {biography}</p>
            </li>
        )
    };

    const CardMemo = React.memo(PoliticianCard);

    return (
        <>
            <h2>Lista dei politici</h2>

            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />

            <ul>
                {filteredPolitician.map(p => <CardMemo key={p.id} data={p} />)}
            </ul>

        </>
    )
}

export default PoliticiansList;
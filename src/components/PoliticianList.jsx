import { useEffect, useState } from "react";

function PoliticianList() {

    const [list, setList] = useState([]);

    async function politicsFetch() {
        const response = await fetch('http://localhost:3333/politicians');
        const data = await response.json();
        console.log(data);
        return setList(data);

    };

    useEffect(() => politicsFetch, [])

    return (
        <>
            <h1>Lista politici</h1>

            <ul>
                {list && list.map(p => <li key={p.id}>
                    <h4>{p.name}</h4>
                    <img src={p.image} alt={p.name} />
                    <p>Position: {p.position}</p>
                    <p>Bio: {p.biography}</p>
                </li>)}
            </ul>
        </>
    )
}

export default PoliticianList;
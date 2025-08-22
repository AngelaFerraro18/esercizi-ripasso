const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
];


function Spesa() {

    return (
        <>
            <h2>Lista della spesa</h2>
            <ul>
                {products.map((p, index) => <li key={index}>
                    <h4>{p.name}</h4>
                    <span> Prezzo: {p.prezzo}</span>
                </li>)}
            </ul>
        </>
    )
}

export default Spesa;
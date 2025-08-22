import { useState } from "react";


const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
];


function Spesa() {

    const [addedProduct, setAddedProduct] = useState([]);

    function addToCart(product) {
        setAddedProduct(prev => {
            if (prev.some(item => item.name === product.name)) return prev;
            return [...prev, { ...product, quantity: 1 }]
        })
    }
    return (
        <>
            <h2>Lista della spesa</h2>
            <ul>
                {products.map((p, index) => <li key={index}>
                    <h4>{p.name}</h4>
                    <span> Prezzo: {p.price}</span>
                    <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
                </li>)}
            </ul>
            {
                addedProduct.length > 0 && (
                    <>
                        <h3>Carrello</h3>
                        <ul>
                            {addedProduct.map((p, index) => <li key={index}>
                                {p.name} - {p.price} --- Quantità: {p.quantity}
                            </li>)}
                        </ul>
                    </>
                )
            }
        </>
    )
}

export default Spesa;
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
            const existing = prev.find(p => p.name === product.name);
            if (existing) {
                return prev.map(p =>
                    p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    }

    function removeFromCart(product) {
        setAddedProduct(prev => prev.filter(item => item.name !== product.name))
    }

    const total = addedProduct.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
    );

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
                addedProduct && addedProduct.length > 0 && (
                    <>
                        <h3>Carrello</h3>
                        <ul>
                            {addedProduct.map((p, index) => <li key={index}>
                                {p.name} - {p.price} --- Quantità: {p.quantity}

                                <button onClick={() => removeFromCart(p)}>Rimuovi</button>
                            </li>
                            )}
                            <span>{total.toFixed(2)} euro</span>
                        </ul>
                    </>
                )
            }
        </>
    )
}

export default Spesa;
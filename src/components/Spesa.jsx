import { useReducer, useState } from "react";


const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
];


function reducer(state, action) {
    switch (action.type) {
        case 'ADD':

            const existing = state.find(p => p.name === action.payload.name);
            if (existing) {
                return state.map(p =>
                    p.name === action.payload.name ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            };

        case 'REMOVE':
            return state.filter(item => item.name !== action.payload.name);
        default:
            return state;
    }
}

function Spesa() {

    const [addedProduct, dispatch] = useReducer(reducer, []);

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
                    <button onClick={() => dispatch({ type: 'ADD', payload: p })}>Aggiungi al carrello</button>
                </li>)}
            </ul>
            {
                addedProduct && addedProduct.length > 0 && (
                    <>
                        <h3>Carrello</h3>
                        <ul>
                            {addedProduct.map((p, index) => <li key={index}>
                                {p.name} - {p.price} --- Quantità: {p.quantity}

                                <button onClick={() => dispatch({ type: 'REMOVE', payload: p })}>Rimuovi</button>
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
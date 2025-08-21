import React, { useState, useCallback } from "react";

// componente button con React.memo 

const Button = React.memo(({ onClick, children }) => {
    console.log('Sto cliccando il bottone');
    return <button onClick={onClick}>{children}</button>;
});

function Counter() {
    const [count, setCount] = useState(0);

    // qui aggiungi le funzioni increment e decrement usando useCallback
    const increment = useCallback(() => setCount(prev => prev + 1), []);
    const decrement = useCallback(() => setCount(prev => prev - 1), []);
    //non serve mettere count nelle dipendenze perchè ho scritto prev => prev ecc e questo vuol dire che ho già l'ultimo valore aggiornato. 

    return (
        <div>
            <h2>{count}</h2>
            <Button onClick={increment}>Incrementa</Button>
            <Button onClick={decrement}>Decrementa</Button>
        </div>
    );
}

export default Counter;

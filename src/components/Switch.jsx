import { useEffect, useState } from "react";

function useSwitch() {
    const [isOn, setIsOn] = useState(false);

    function toggle() {
        setIsOn(prev => !prev);
    }

    return [isOn, toggle];
}


function useDate() {

    const [now, setNow] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => (clearInterval(timer));

    }, []);

    return now;
}

function Switch() {
    const [isOn, toggle] = useSwitch();
    const currentDate = useDate();


    return (

        <>
            <div>
                <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
                <button onClick={toggle}>Cambia Stato</button>
            </div>

            <div>
                <h1>Data e ora attuali:</h1>
                <p>{currentDate.toLocaleString()}</p>
            </div>
        </>

    );
}

export default Switch;
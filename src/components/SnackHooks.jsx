import { useEffect, useState } from "react";

function useSwitch(initialValue = false) {

    const [isOn, setIsOn] = useState(initialValue);

    function toggle() {
        setIsOn(prev => !prev);
    }

    return [isOn, toggle];

}


function useDate() {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);


    return now;
}


function SnackHooks() {
    const [isOn, toggle] = useSwitch();
    const currentDate = useDate();


    return (
        <>
            <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
            <button onClick={toggle}>Cambia Stato</button>


            <h1>Data e ora attuali:</h1>
            <p>{currentDate.toLocaleString()}</p>
        </>
    )
}

export default SnackHooks;
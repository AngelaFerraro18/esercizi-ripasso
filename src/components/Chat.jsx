import { useState, useRef, useEffect } from "react";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const endRef = useRef(null); // TODO: collega questo ref all'ultimo elemento della lista

    function addMessage() {
        setMessages(prev => [...prev, `Messaggio ${prev.length + 1}`]);
    }

    useEffect(() => {
        // TODO: usa endRef.current.scrollIntoView per scrollare automaticamente

        endRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div style={{ maxHeight: 200, overflowY: "auto", border: "1px solid gray" }}>
            {messages.map((msg, i) => (
                <p key={i}>{msg}</p>
            ))}
            <div ref={endRef}></div>
            <button onClick={addMessage}>Nuovo messaggio</button>
        </div>
    );
}

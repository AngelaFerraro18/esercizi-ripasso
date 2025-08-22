import { useState, useEffect } from "react";

export default function NoteApp() {
    // Stato iniziale note
    const [notes, setNotes] = useState(() => {
        const note = localStorage.getItem('notes');
        return note ? JSON.parse(note) : [];
    });

    // Stato per l'input controllato
    const [newNote, setNewNote] = useState('');

    // TODO: Recupera le note da localStorage all'avvio

    // TODO: Aggiorna localStorage ogni volta che notes cambia
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    // Aggiungi una nuova nota
    function addNote() {
        if (newNote.trim() === "") return;
        // TODO: aggiungere la nota allo stato
        setNotes(prev => [...prev, newNote]);

        setNewNote(""); // reset input
    }

    // Rimuovi una nota
    function removeNote(index) {
        // TODO: rimuovere la nota dall'array
        setNotes(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>Le tue note</h2>

            <ul>
                {notes.map((note, index) => (
                    <li key={index}>
                        {note}{" "}
                        <button onClick={() => removeNote(index)}>Rimuovi</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="Scrivi una nota..."
                value={newNote}
                onChange={e => setNewNote(e.target.value)}
            />
            <button onClick={addNote}>Aggiungi nota</button>
        </div>
    );
}

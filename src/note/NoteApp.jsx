import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList";
import { useReducer } from "react";

let id = 0;
const initialNotes = [
    { id: id++, text: "Learn HTML", done: false },
    { id: id++, text: "Learn CSS", done: false },
    { id: id++, text: "Learn Javascript", done: false },
    { id: id++, text: "Learn React", done: false },
];


function noteReducer(notes, action) {
    if (action.type === "ADD_NOTE") {
        notes.push({ id: id++, text: action.text, done: false });
    } else if (action.type === "CHANGE_NOTE") {
        const note = notes.find((n) => n.id === action.id);
        note.text = action.text;
        note.done = action.done;
    } else if (action.type === "DELETE_NOTE") {
        const noteIndex = notes.findIndex((n) => n.id === action.id);
        notes.splice(noteIndex, 1);
    }
    return notes;
}


export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes);

    function handleAddNote(text) {
        dispatch({ type: "ADD_NOTE", text });
        };

    function handleChangeNote(note) {
        dispatch({ type: "CHANGE_NOTE", id: note.id, text: note.text, done: note.done });
    }

    function handleDeleteNote(note) {
        dispatch({ type: "DELETE_NOTE", id: note.id });
    }

    return (
        <div>
            <h1>Note App</h1>
            <NoteForm onAdd={handleAddNote} />
            <NoteList
                notes={notes}
                onChange={handleChangeNote}
                onDelete={handleDeleteNote}
            />
        </div>
    );
}
import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn React", done: false },
];

function noteReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } 
  else if (action.type === "CHANGE_NOTE") {
    const note = notes.find((n) => n.id === action.id);
    if (note) {
      note.text = action.text;
      note.done = action.done;
    }
  } 
  else if (action.type === "DELETE_NOTE") {
    return notes.filter((n) => n.id !== action.id);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(noteReducer, initialNotes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        <h1>Note App</h1>
        <NoteForm />
        <NoteList />
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

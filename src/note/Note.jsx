import { useState, useContext } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const dispatch = useContext(NotesDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeText(e) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: e.target.value,
      done: note.done,
    });
  }

  function handleChangeDone(e) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: e.target.checked,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />

      {isEditing ? (
        <>
          <input value={note.text} onChange={handleChangeText} />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          {note.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

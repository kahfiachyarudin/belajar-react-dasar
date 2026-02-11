import { useState, useContext } from "react";
import { NoteDispatchContext } from "./NoteContext";

export default function NoteForm() {
    const [text, setText] = useState("");
    const onAdd = useContext(NoteDispatchContext);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        dispatch({
            type: "add",
            text: text
        })
    }

    return (
        <>
            <input
                placeholder="Add note"
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Add</button>
        </>
    );
}
import { useState } from "react";

export default function NoteForm({ onAdd }) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        if (text.trim() === "") return;
        onAdd(text);
        setText("");
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
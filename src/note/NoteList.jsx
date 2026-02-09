import DataSiswa from "./DataSiswa";

export default function NoteList({ notes, onChange, onDelete }) {
    return (
        // <ul>
        //     {notes.map((note) => (
        //        <li key={note.id}>
        //          <Note note={note} onChange={onChange} Ondelete={onDelete} />
        //        </li>
        //     ))}
        // </ul>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Kelas</th>
                    <th>Umur</th>
                </tr>
            </thead>
            <tbody>
                {notes.map((note) => (
                    <Note key={note.id} note={note} onChange={onChange} Ondelete={onDelete} />
                ))}
            </tbody>
        </table>
    );
}